import os
import datetime
from typing import Dict, List, Optional
from pydantic import BaseModel

from fastapi import HTTPException, status, Depends, APIRouter
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt

from backend.server.model import (
    User, Research, Report, ResearchLog,
    create_user, get_user_by_username, 
    authenticate_user
)

router = APIRouter(prefix="/api/auth", tags=["auth"])

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30))

# Validate that required environment variables are set
if not SECRET_KEY:
    raise ValueError("SECRET_KEY environment variable must be set for JWT authentication")

if len(SECRET_KEY) < 32:
    raise ValueError("SECRET_KEY must be at least 32 characters long for security")

if ALGORITHM not in ["HS256", "HS384", "HS512"]:
    raise ValueError(f"Unsupported algorithm: {ALGORITHM}. Must be one of HS256, HS384, HS512")

if ACCESS_TOKEN_EXPIRE_MINUTES < 1:
    raise ValueError("ACCESS_TOKEN_EXPIRE_MINUTES must be at least 1 minute")

class UserRegister(BaseModel):
    username: str
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class ResearchHistoryItem(BaseModel):
    id: str
    task: str
    report_type: str
    created_at: datetime.datetime
    md_path: Optional[str] = None
    docx_path: Optional[str] = None
    pdf_path: Optional[str] = None

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Helper functions for JWT
def create_access_token(data: dict, expires_delta: Optional[datetime.timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.datetime.now(datetime.timezone.utc) + expires_delta
    else:
        expire = datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    
    user = await get_user_by_username(username=token_data.username)
    if user is None:
        raise credentials_exception
    return user

@router.post("/register", response_model=Token)
async def register(user_data: UserRegister):
    try:
        user = await create_user(
            username=user_data.username,
            email=user_data.email,
            password=user_data.password
        )
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )
    
    access_token_expires = datetime.timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = datetime.timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "username": current_user.username,
        "email": current_user.email,
        "is_active": current_user.is_active,
        "created_at": current_user.created_at
    }

@router.get("/history")
async def get_history(current_user: User = Depends(get_current_user)):
    # Get all researches for the user
    researches = Research.select().where(Research.user == current_user)
    
    # Get all reports for each research
    history = []
    for research in researches:
        reports = Report.select().where(Report.research == research)
        for report in reports:
            history.append({
                "id": report.id,
                "task": report.task,
                "report_type": report.report_type,
                "created_at": report.created_at,
                "md_path": report.md_path,
                "docx_path": report.docx_path,
                "pdf_path": report.pdf_path
            })
    
    # Sort by creation date descending
    history.sort(key=lambda x: x["created_at"], reverse=True)
    
    return {"history": history}
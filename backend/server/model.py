import os
from peewee import *
import datetime
from passlib.context import CryptContext

# Initialize password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Database configuration from environment variables
DB_TYPE = os.getenv('DB_TYPE', 'sqlite')
DB_NAME = os.getenv('DB_NAME', 'deep_researcher.db')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST', 'localhost')
DB_PORT = os.getenv('DB_PORT')

# Database connection based on environment variables
if DB_TYPE == 'sqlite':
    database = SqliteDatabase(DB_NAME)
elif DB_TYPE == 'postgresql':
    database = PostgresqlDatabase(
        DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )
elif DB_TYPE == 'mysql':
    database = MySQLDatabase(
        DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )
else:
    raise ValueError(f"Unsupported database type: {DB_TYPE}")


class BaseModel(Model):
    class Meta:
        database = database

class User(BaseModel):
    username = CharField(unique=True)
    email = CharField(unique=True)
    hashed_password = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)
    is_active = BooleanField(default=True)

    def verify_password(self, plain_password):
        return pwd_context.verify(plain_password, self.hashed_password)

class ResearchHistory(BaseModel):
    user = ForeignKeyField(User, backref='research_history')
    task = TextField()
    report_type = TextField()
    report_source = TextField()
    research_id = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)
    docx_path = TextField(null=True)
    pdf_path = TextField(null=True)

def create_tables():
    with database:
        database.create_tables([User, ResearchHistory])

def initialize_database():
    create_tables()

# Password helper functions
def get_password_hash(password):
    return pwd_context.hash(password)

# User CRUD operations
async def create_user(username: str, email: str, password: str):
    hashed_password = get_password_hash(password)
    try:
        user = User.create(
            username=username,
            email=email,
            hashed_password=hashed_password
        )
        return user
    except IntegrityError as e:
        raise ValueError("Username or email already exists") from e

async def get_user_by_username(username: str):
    try:
        return User.get(User.username == username)
    except DoesNotExist:
        return None

async def get_user_by_email(email: str):
    try:
        return User.get(User.email == email)
    except DoesNotExist:
        return None

async def authenticate_user(username: str, password: str):
    is_email = "@" in username
    if is_email:
        user = await get_user_by_email(username)
    else:
        user = await get_user_by_username(username)
    if not user:
        return None
    if not user.verify_password(password):
        return None
    return user

async def add_research_history(user: User, research_data: dict):
    return ResearchHistory.create(
        user=user,
        task=research_data['task'],
        report_type=research_data['report_type'],
        report_source=research_data['report_source'],
        research_id=research_data['research_id'],
        docx_path=research_data.get('docx_path'),
        pdf_path=research_data.get('pdf_path')
    )

async def get_user_research_history(user: User):
    return list(ResearchHistory.select().where(ResearchHistory.user == user).order_by(ResearchHistory.created_at.desc()))

# Initialize database when this module is imported
initialize_database()
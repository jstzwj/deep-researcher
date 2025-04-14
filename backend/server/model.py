from enum import unique
import os
from peewee import *
import datetime
from passlib.context import CryptContext
import uuid

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
    id = CharField(max_length=64, unique=True, default=lambda: str(uuid.uuid4()))
    username = CharField(unique=True)
    email = CharField(unique=True)
    hashed_password = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)
    is_active = BooleanField(default=True)

    def verify_password(self, plain_password):
        return pwd_context.verify(plain_password, self.hashed_password)

class Research(BaseModel):
    id = CharField(max_length=64, unique=True, default=lambda: str(uuid.uuid4()))
    user = ForeignKeyField(User, backref='researches')
    task = TextField()
    report_type = TextField()
    report_source = TextField()
    created_at = DateTimeField(default=datetime.datetime.now)

class ResearchLog(BaseModel):
    id = CharField(max_length=64, unique=True, default=lambda: str(uuid.uuid4()))
    research = ForeignKeyField(Research, backref='logs')
    user = ForeignKeyField(User)
    action = TextField()
    details = TextField(null=True)
    created_at = DateTimeField(default=datetime.datetime.now)

class Report(BaseModel):
    id = CharField(max_length=64, unique=True, default=lambda: str(uuid.uuid4()))
    research = ForeignKeyField(Research, backref='reports')
    user = ForeignKeyField(User)
    task = TextField()
    report_type = TextField()
    report_source = TextField()
    created_at = DateTimeField(default=datetime.datetime.now)
    md_path = TextField(null=True)
    docx_path = TextField(null=True)
    pdf_path = TextField(null=True)
    finished = BooleanField()


def create_tables():
    with database:
        database.create_tables([User, User, Research, ResearchLog, Report])

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
            id=str(uuid.uuid4()),
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

# Initialize database when this module is imported
initialize_database()
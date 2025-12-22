import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import DeclarativeMeta, declarative_base
from sqlalchemy.orm import sessionmaker
import databases

# Obtener variables de entorno
POSTGRES_SERVER = os.getenv("POSTGRES_SERVER", "10.110.252.43")
POSTGRES_USER = os.getenv("POSTGRES_USER", "postgres")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD", "postgres")
POSTGRES_DB = os.getenv("POSTGRES_DB", "rcd_test")
POSTGRES_PORT = os.getenv("POSTGRES_PORT", "5435")

# URL para database async (usando asyncpg)
DATABASE_URL = f"postgresql+asyncpg://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_SERVER}:{POSTGRES_PORT}/{POSTGRES_DB}"

database = databases.Database(DATABASE_URL)
engine = create_async_engine(DATABASE_URL)
SessionLocal = sessionmaker(
    engine, 
    class_=AsyncSession, 
    expire_on_commit=False
)

Base: DeclarativeMeta = declarative_base()
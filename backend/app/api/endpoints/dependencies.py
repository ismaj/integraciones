from typing import Generator
from sqlalchemy.orm import Session

from app.db.session import SessionLocal

# Dependency para obtener una sesión de base de datos
def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

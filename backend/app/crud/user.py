from sqlalchemy.orm import Session
from app.models import user as user_model
from app.schemas import user as user_schema
from app.utils.security import get_password_hash

def create_user(db: Session, user: user_schema.UserCreate):
    hashed_pw = get_password_hash(user.password)
    db_user = user_model.User(
        username=user.username,
        email=user.email,
        hashed_password=hashed_pw
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# backend/app/services/auth_service.py
from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate
from app.utils.security import hash_password, verify_password
from fastapi import HTTPException
from app.schemas.auth import LoginRequest
from app.utils.jwt import create_access_token

def create_user(db: Session, user_data: UserCreate) -> User:
    hashed_pw = hash_password(user_data.password)
    user = User(email=user_data.email, hashed_password=hashed_pw)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def authenticate_user(db: Session, login_data: LoginRequest) -> User:
    user = db.query(User).filter(User.email == login_data.email).first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    if not verify_password(login_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return user

def login_and_get_token(db: Session, login_data: LoginRequest) -> str:
    user = authenticate_user(db, login_data)
    token = create_access_token(data={"sub": user.email})
    return token
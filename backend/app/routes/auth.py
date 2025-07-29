# backend/app/routes/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate
from app.services.auth_service import create_user
from app.deps import get_db
from app.models.user import User
from app.schemas.auth import LoginRequest
from app.services.auth_service import login_and_get_token
from app.dependencies.auth import get_current_user

router = APIRouter()

@router.post("/register", status_code=201)
def register(user_data: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user_data.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    user = create_user(db, user_data)
    return {"id": user.id, "email": user.email}

@router.post("/login")
def login(login_data: LoginRequest, db: Session = Depends(get_db)):
    token = login_and_get_token(db, login_data)
    return {
        "access_token": token,
        "token_type": "bearer"
    }


@router.get("/me")
def read_me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email
    }
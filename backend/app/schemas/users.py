# backend/app/schemas/user.py
from pydantic import BaseModel, EmailStr

class Users(BaseModel):
    id: int
    name: str
    email: str
    signup: str
    status: str
    plan: str
    role: str
    lastActive: str
    avatar: str
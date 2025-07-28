# backend/app/routes/auth.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/ping")
def ping():
    return {"msg": "pong"}

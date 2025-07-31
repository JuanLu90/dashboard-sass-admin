from fastapi import APIRouter
from typing import List
from app.schemas.users import Users
from app.services.users_service import get_users_data
from app.utils.delay import simulate_delay

router = APIRouter()

@router.get("/users/users-data", response_model=List[Users])
async def get_users():
    await simulate_delay()
    return get_users_data()
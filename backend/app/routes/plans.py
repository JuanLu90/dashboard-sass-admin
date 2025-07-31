from fastapi import APIRouter
from app.schemas.plans import PlansResponse
from app.services.plans_service import get_plans_data
from app.utils.delay import simulate_delay

router = APIRouter()

@router.get("/plans", response_model=PlansResponse)
async def get_plans():
    await simulate_delay()
    return get_plans_data()

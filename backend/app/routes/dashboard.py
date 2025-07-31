from fastapi import APIRouter
from typing import List
from app.schemas.dashboard import KPI, DashboardTables, PlanDistributionResponse, RevenueResponse
from app.services.dashboard_service import get_kpis, get_tables, get_plans_distribution, get_revenue
from app.utils.delay import simulate_delay

router = APIRouter()

@router.get("/dashboard/kpis", response_model=List[KPI])
async def get_dashboard_kpis():
    await simulate_delay()
    return get_kpis()

@router.get("/dashboard/tables", response_model=DashboardTables)
async def get_dashboard_tables():
    await simulate_delay()
    return get_tables()

@router.get("/dashboard/plans-distribution", response_model=PlanDistributionResponse)
async def get_dashboard_plans_distribution():
    await simulate_delay()
    return get_plans_distribution()

@router.get("/dashboard/revenue", response_model=RevenueResponse)
async def get_dashboard_revenue():
    await simulate_delay()
    return get_revenue()
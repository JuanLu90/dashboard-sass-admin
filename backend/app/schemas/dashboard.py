from pydantic import BaseModel, EmailStr
from typing import Optional, List

class KPI(BaseModel):
    title: str
    value: float
    icon: str
    change: float
    caption: str
    prefix: Optional[str] = None
    suffix: Optional[str] = None


class RecentUser(BaseModel):
    id: int
    name: str
    email: EmailStr
    signup: str
    status: str
    plan: str
    avatar: str

class RecentSubscription(BaseModel):
    id: int
    user: str
    plan: str
    startDate: str
    status: str
    avatar: str

class RecentIncident(BaseModel):
    id: int
    user: str
    subject: str
    status: str
    priority: str
    avatar: str

class DashboardTables(BaseModel):
    recentUsers: List[RecentUser]
    recentSubscriptions: List[RecentSubscription]
    recentIncidents: List[RecentIncident]

class PlanDistributionItem(BaseModel):
    plan: str
    count: int

class PlanDistributionResponse(BaseModel):
    plans: List[PlanDistributionItem]

class RevenueResponse(BaseModel):
    month: str
    revenue: int

class ActiveUserDay(BaseModel):
    date: str
    users: int
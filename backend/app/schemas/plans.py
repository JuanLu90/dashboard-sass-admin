from pydantic import BaseModel
from typing import Dict, List

class Plan(BaseModel):
    name: str
    price: int
    period: str
    users: int
    description: str
    features: Dict[str, bool]

class PlansResponse(BaseModel):
    plans: List[Plan]
    featureList: List[str]

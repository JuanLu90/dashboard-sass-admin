from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, dashboard, users, plans

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])
app.include_router(dashboard.router, prefix="/api", tags=["Dashboard"])
app.include_router(users.router, prefix="/api", tags=["Users"])
app.include_router(plans.router, prefix="/api", tags=["Plans"])
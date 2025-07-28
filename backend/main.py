# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth  # ← asumimos que auth.py está en routes/

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # para desarrollo, luego ajustas
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth")

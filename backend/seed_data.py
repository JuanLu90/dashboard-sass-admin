import os
from dotenv import load_dotenv

load_dotenv(".env") 

import bcrypt
from sqlalchemy.orm import Session
from app.db import SessionLocal, Base, engine
from app.models.user import User

Base.metadata.create_all(bind=engine)

def seed_demo_user():
    db: Session = SessionLocal()

    demo_email = "test@example.com"
    demo_password = "123456"

    existing_user = db.query(User).filter(User.email == demo_email).first()
    if not existing_user:
        hashed_password = bcrypt.hashpw(demo_password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
        user = User(email=demo_email, hashed_password=hashed_password)
        db.add(user)
        db.commit()
        print("✅ Demo user created")
    else:
        print("ℹ️ Demo user already exists")

    db.close()

if __name__ == "__main__":
    seed_demo_user()

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from api.db.database import get_db
from api.repository import users
from api.db import models
from api.auth import tokens
from api.utils import schemas, hashing


router = APIRouter(tags=["Authentication"])


@router.post("/register", response_model=schemas.User)
def register(request: schemas.UserCreate, db: Session = Depends(get_db)):
    return users.create(request, db)


@router.post("/login")
def login(
    request: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)
):
    # error response
    invalid_credential = HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail="Invalid Credentials"
    )

    # authenticate user
    user = db.query(models.User).filter(models.User.email == request.username).first()
    if not user:
        raise invalid_credential

    if not hashing.verify_password(request.password, user.hashed_password):
        raise invalid_credential

    access_token = tokens.create_access_token(data={"sub": user.email})

    return {"access_token": access_token, "token_type": "bearer"}

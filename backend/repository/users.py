from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import schemas, models
from hashing import get_password_hash


def create(request: schemas.UserCreate, db: Session):

    # Password length verification
    if len(request.password) < 6:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Password too short!"
        )

    user = db.query(models.User).filter(models.User.email == request.email).first()
    if not (not user):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="This email is already registered",
        )

    new_user = models.User(
        email=request.email, hashed_password=get_password_hash(request.password)
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

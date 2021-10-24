from typing import Optional
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session, query

from api.db import models
from api.utils import schemas
from api.db.database import get_db
from api.utils.oauth2 import get_current_user
from api.repository.users import read_user


router = APIRouter(prefix="/food", tags=["Food"])


@router.post("/", status_code=status.HTTP_201_CREATED)
def create_food(
    request: schemas.FoodBase,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    user = read_user(current_user.email, db)

    food = models.Food(
        author_id=user.id,
        title=request.title,
        instructions=request.instructions,
        ingredients=request.ingredients,
    )
    db.add(food)
    db.commit()
    db.refresh(food)

    return food


@router.get("/")
def get_foods(limit: Optional[int] = -1, offset: Optional[int] = -1, db: Session = Depends(get_db)):
    query = db.query(models.Food).join(models.User)

    if (limit != -1):
        query = query.limit(limit)

        if (offset != -1):
            query = query.offset(offset * limit)

    return query.all()
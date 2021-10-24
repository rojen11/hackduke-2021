from fastapi import APIRouter, Depends, status
from typing import List
from sqlalchemy.orm import Session
from api.db.database import get_db
from api.db import models
from api.utils.oauth2 import get_current_user
from api.utils import schemas


router = APIRouter(tags=["Reminder"], prefix="/reminder")


@router.get(
    "/", response_model=List[schemas.ReminderData], status_code=status.HTTP_200_OK
)
def get_reminders(
    current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)
):
    reminders = (
        db.query(models.Reminder)
        .join(models.User)
        .filter(models.User.email == current_user.email)
        .all()
    )
    return reminders


@router.post("/create", status_code=status.HTTP_201_CREATED, response_model=schemas.ReminderData)
def create_reminder(
    request: schemas.ReminderBase,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    new_reminder = request.copy()
    user = db.query(models.User).filter(models.User.email == current_user.email).first()
    reminder = models.Reminder(
        title=new_reminder.title,
        body=new_reminder.body,
        due_date=new_reminder.due_date,
        user_id=user.id,
    )

    db.add(reminder)
    db.commit()
    db.refresh(reminder)
    return reminder



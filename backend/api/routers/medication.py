from fastapi import APIRouter, Depends, BackgroundTasks
from typing import Optional
from sqlalchemy.orm import Session
from api.utils import schemas, sms
from api.utils.oauth2 import get_current_user
from api.db.database import get_db
from api.db import models

from api.repository.users import read_user


router = APIRouter(tags=["Medication"], prefix="/medication")


@router.post("/")
def add_medication(
    request: schemas.MedicalBase,
    backgroundTasks: BackgroundTasks,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    user = read_user(current_user.email, db)

    med = models.Medication(
        user_id=user.id,
        vet=request.vet,
        medication=request.medication,
        last_date=request.last_date,
        next_date=request.next_date,
        remind=request.remind,
    )

    db.add(med)
    db.commit()
    db.refresh(med)

    if med.remind:
        body = f"{request.medication} : {request.vet}"
        backgroundTasks.add_task(sms.schedule_sms, request.offset, user.phone_no, body)

    return med


@router.get("/")
def get_medications(limit: Optional[int] = -1, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    query = db.query(models.Medication).join(models.User).filter(models.User.email == current_user.email)
    if (limit != -1):
        medications = query.limit(limit).all()
    else:
        medications = query.all()

    return medications
        

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from api.utils import schemas
from api.utils.oauth2 import get_current_user
from api.db import models, database

get_db = database.get_db

router = APIRouter(
    prefix="/pet",
    tags=["Pet"]
)


@router.post("/", response_model=schemas.PetData)
def set_pet(request: schemas.PetBase, current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == current_user.email).first()

    current_pet = db.query(models.PetProfile).filter(models.PetProfile.user_id == user.id).first()

    if not current_pet: 
        new_pet = models.PetProfile(user_id=user.id, pet_name=request.name, pet_type=request.pet_type)
        db.add(new_pet)
        db.commit()
        db.refresh(new_pet)

        return new_pet

    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="You already have a pet.")
    

@router.get("/", response_model=schemas.PetData)
def get_pet(db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    pet = db.query(models.PetProfile).join(models.User).filter(models.User.email == current_user.email).first()

    if (not pet):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="You haven't registered your pet.")

    return pet
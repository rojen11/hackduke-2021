from fastapi import APIRouter, Depends
from api.schemas import User
from api.oauth2 import get_current_user


router = APIRouter(prefix="/user", tags=["User"])


@router.get("/me")
def get_user(current_user: User = Depends(get_current_user)):
    return current_user

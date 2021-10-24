from pydantic import BaseModel
from typing import Optional
import datetime


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str


class TokenData(BaseModel):
    email: Optional[str] = None


# Reminders
class ReminderBase(BaseModel):
    title: str
    body: str
    due_date: datetime.datetime

class ReminderData(ReminderBase):

    id: int

    class Config:
        orm_mode = True


# pet 
class PetBase(BaseModel):
    pet_name: str
    pet_type: str

class PetData(PetBase):

    id: int

    class Config:
        orm_mode = True
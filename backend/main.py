from fastapi import FastAPI, Depends
import models

from database import engine

from oauth2 import oauth2_scheme
from routers import users, auth

models.Base.metadata.create_all(bind=engine)

app = FastAPI(root_path="/api")

app.include_router(auth.router)
app.include_router(users.router)



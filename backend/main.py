from fastapi import FastAPI, Depends
from api import models

from api.database import engine

from api.routers import users, auth

models.Base.metadata.create_all(bind=engine)

app = FastAPI(root_path="/api")

app.include_router(auth.router)
app.include_router(users.router)



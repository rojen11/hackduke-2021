from fastapi import FastAPI, Depends
import uvicorn

from api.db import models

from api.db.database import engine

from api.routers import users, auth, reminder, petprofile

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(reminder.router)
app.include_router(petprofile.router)


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True, log_level="debug")

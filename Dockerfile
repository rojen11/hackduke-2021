FROM python:3.9-slim

WORKDIR /code

COPY requirements.txt /code/

RUN pip install -r requirements.txt

COPY ./backend /code/app

WORKDIR /code/app

CMD ["uvicorn", "main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "80", "--root-path", "/api"]
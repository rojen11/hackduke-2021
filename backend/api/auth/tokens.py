from jose import JWTError, jwt
from api import config
from datetime import datetime, timedelta
from api.utils.schemas import TokenData


def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(config.ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, config.SECRET_KEY, algorithm=config.ALGORITHM)

    return encoded_jwt


def decode_token(token: str):
    return jwt.decode(token, config.SECRET_KEY, algorithms=[config.ALGORITHM])


def verify_token(token: str, credentials_exception):
    try:
        payload = decode_token(token)
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        return TokenData(email=email)
    except JWTError:
        raise credentials_exception

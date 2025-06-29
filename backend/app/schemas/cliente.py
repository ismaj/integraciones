from pydantic import BaseModel
from datetime import date

class ClienteBase(BaseModel):
    nombre: str
    dni: str
    ciudad: str | None = None
    direccion: str | None = None
    fecha_nacimiento: date | None = None

class ClienteCreate(ClienteBase):
    pass

class ClienteOut(ClienteBase):
    id: int

    class Config:
        orm_mode = True

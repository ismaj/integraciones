from pydantic import BaseModel

class ProductoFacturadoBase(BaseModel):
    codigo: str
    descripcion: str
    precio: float

class ProductoFacturadoCreate(ProductoFacturadoBase):
    pass

class ProductoFacturadoOut(ProductoFacturadoBase):
    id: int

    class Config:
        orm_mode = True

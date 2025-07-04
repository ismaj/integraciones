from sqlalchemy import Column, Integer, String, Date
from app.db.session import Base

class Cliente(Base):
    __tablename__ = "clientes"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    dni = Column(String, unique=True, nullable=False)
    direccion = Column(String, nullable=True)


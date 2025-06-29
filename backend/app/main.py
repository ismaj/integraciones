from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import cliente, factura
app = FastAPI()
app.include_router(cliente.router)
app.include_router(factura.router)


@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI application!"}
    
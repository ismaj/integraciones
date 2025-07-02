from fastapi import FastAPI
from app.db.db import init_db
from app.api.endpoints import cliente, factura,auth
from fastapi.middleware.cors import CORSMiddleware

# Instancia principal de la aplicación
app = FastAPI(
    title="API Clientes y Facturación",
    version="1.0.0"
)
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://192.168.1.5:5173"],  # Cambia al origen real del frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


init_db()
# Incluir routers
app.include_router(cliente.router, prefix="/api/clientes", tags=["Clientes"])
app.include_router(factura.router, prefix="/api/facturas", tags=["Facturas"])
app.include_router(auth.router, prefix="/api/auth", tags=["Autenticación"]) 
# Usamos una imagen de Node más compatible que Alpine
FROM node:20-slim

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y lock primero para instalar deps
COPY package*.json ./

# Instalar dependencias con limpieza
RUN npm install --force

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto donde Vite sirve
EXPOSE 5173

# Comando para desarrollo
CMD ["npm", "run", "dev"]

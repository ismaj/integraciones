# frontend/Dockerfile
FROM node:20 AS dev
WORKDIR /app

# 1. Instalar npm 9 (npm 10 tiene el bug que dispara el error de Rollup)
RUN npm install -g npm@9

# 2. Instalar dependencias sin opcionales
COPY package*.json ./
RUN npm install --omit=optional

# 3. Copiar resto del código
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
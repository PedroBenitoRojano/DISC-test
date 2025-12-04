# ETAPA 1: COCINAR (Construir la app)
# Usamos Node para instalar y compilar
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ETAPA 2: SERVIR (Mostrar la web)
# Usamos Nginx para mostrar solo el resultado final optimizado
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

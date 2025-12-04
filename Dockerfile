# Usamos Nginx, un servidor web profesional y ligero
FROM nginx:alpine

# Borramos la configuración por defecto de Nginx para evitar conflictos
RUN rm -rf /usr/share/nginx/html/*

# Copiamos TODOS los archivos de tu carpeta actual a la carpeta pública del servidor
COPY . /usr/share/nginx/html

# Le decimos a Railway que use el puerto 80 (el estándar web)
EXPOSE 80

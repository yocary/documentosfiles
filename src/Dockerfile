# Etapa 1: Construir la aplicación Angular
FROM node:14 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json al directorio de trabajo
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente de la aplicación al directorio de trabajo
COPY . .

# Construye la aplicación Angular en modo producción
RUN npm run build --prod

# Etapa 2: Servir la aplicación Angular con Nginx
FROM nginx:alpine

# Copia la salida de la construcción desde la etapa anterior al directorio html de Nginx
COPY --from=build /app/dist/sdr /usr/share/nginx/html

# Copia el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80 al mundo exterior
EXPOSE 80

# Inicia Nginx cuando el contenedor arranque
CMD ["nginx", "-g", "daemon off;"]

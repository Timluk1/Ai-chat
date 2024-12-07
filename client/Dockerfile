# Этап сборки
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Этап производства
FROM nginx:alpine AS production

# Копируем скомпилированные файлы из этапа сборки в Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфигурационный файл Nginx
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
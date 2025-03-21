FROM node:23 AS backend-dev
COPY . .
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json\
    npm ci
CMD ["sh", "-c", "npm run start"]

FROM nginx:1.27.4-alpine AS web-dev
COPY nginx.conf /etc/nginx/nginx.conf
COPY public /data/www/
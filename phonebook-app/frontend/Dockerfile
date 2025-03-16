FROM node:22-bullseye-slim AS build-stage 

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:8080
ENV CI=true

RUN npm run build

FROM nginx:1.27-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# The first FROM is now a stage called build-stage
FROM node:22-bullseye-slim AS build-stage 

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:8080/api
ENV CI=true

RUN npm test

RUN npm run build

# This is a new stage, everything before this is gone, except for the files that we want to COPY
FROM nginx:1.27-alpine

# COPY the directory dist from the build-stage to /usr/share/nginx/html
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

FROM node:22-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

ENV DEBUG=todo-express-backend:* \
    NODE_ENV=production

USER node

CMD ["npm", "start"]
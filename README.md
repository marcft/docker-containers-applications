# Learning Docker

This repository contains various exercises and applications to help you learn Docker. The main focus is on containerizing applications and understanding how to work with Docker in a development environment.

## Script Answers Folder

The script-answers folder contains the output for exercises that required executing the script command and capturing everything I executed to complete the exercise.

## Todo App

The Todo App is a simple application that demonstrates how to containerize both backend and frontend services using Docker.

### Backend

The backend is an Express application. For more information on how to set up and run the backend, refer to the [backend README](./todo-app/todo-backend/README.md).

- **Dockerfile**: Used for building the production image.
- **dev.Dockerfile**: Used for development purposes.
- **docker-compose.dev.yml**: Used for containerizing the backend in a development environment.

### Frontend

The frontend is a React application created with Vite. For more information on how to set up and run the frontend, refer to the [frontend README](./todo-app/todo-frontend/README.md).

- **Dockerfile**: Used for building the production image.
- **dev.Dockerfile**: Used for development purposes.
- **docker-compose.dev.yml**: Used for containerizing the frontend in a development environment.

### App Level Docker Compose

- **docker-compose.dev.yml**: Used for containerizing the entire application (both backend and frontend) in a development environment.
- **docker-compose.yml**: Used for containerizing the entire application (both backend and frontend) in a production environment.

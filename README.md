# Learning Docker

This repository contains various exercises and applications to help you learn Docker. The main focus is on containerizing applications and understanding how to work with Docker in a development environment.

## Script Answers Folder

The script-answers folder contains the output for exercises that required executing the script command and capturing everything I executed to complete the exercise.

## Todo App

The Todo App is a simple application that demonstrates how to containerize both backend and frontend services using Docker.

### Todo App Docker Components

- **Frontend Container**: Serves the React frontend with hot-reloading for development
- **Backend Container**: Provides the API with connection to MongoDB
- **MongoDB Container**: Database with initialization script and persistent storage
- **Nginx**: Routes traffic on port 8080 to appropriate services
- **Debug Helper**: Utility container for troubleshooting and debugging

### Todo Backend

The backend is an Express application. For more information on how to set up and run the backend, refer to the [backend README](./todo-app/todo-backend/README.md).

- **Dockerfile**: Used for building the production image.
- **dev.Dockerfile**: Used for development purposes.
- **docker-compose.dev.yml**: Used for containerizing the backend in a development environment.

### Todo Frontend

The frontend is a React application created with Vite. For more information on how to set up and run the frontend, refer to the [frontend README](./todo-app/todo-frontend/README.md).

- **Dockerfile**: Used for building the production image.
- **dev.Dockerfile**: Used for development purposes.
- **docker-compose.dev.yml**: Used for containerizing the frontend in a development environment.

### Todo-App Docker Compose

- **docker-compose.dev.yml**: Used for containerizing the entire application (both backend and frontend) in a development environment.
- **docker-compose.yml**: Used for containerizing the entire application (both backend and frontend) in a production environment.

## Phonebook App

The Phonebook App is a full-stack application made by myself, that I containerized to demonstrate Docker's practical use in a working app.

### Architecture

- **Frontend**: React application built with development settings
- **Backend**: Node.js/Express API service
- **Database**: MongoDB with persistent data storage
- **Nginx**: Reverse proxy to route traffic between services
- **Debug Helper**: Utility container for troubleshooting and debugging

### Phonebook App Docker Components

- **Frontend Container**: Serves the React frontend with hot-reloading for development
- **Backend Container**: Provides the API with connection to MongoDB
- **MongoDB Container**: Database with initialization script and persistent storage
- **Nginx**: Routes traffic on port 8080 to appropriate services
- **Debug Helper**: Utility container for troubleshooting and debugging

### Phonebok Frontend

The frontend is a React application created with Vite. For more information on how to set up and run the frontend, refer to the [frontend README](./phonebook-app/frontend/README.md).

- **Dockerfile**: Used for building the production image.
- **dev.Dockerfile**: Used for development purposes.

### Phonebook Backend

The backend is an Express application. For more information on how to set up and run the backend, refer to the [backend README](./phonebook-app/backend/README.md).

- **Dockerfile**: Used for building the production image.
- **dev.Dockerfile**: Used for development purposes.

### Phonebook-App Docker Compose

- **docker-compose.dev.yml**: Used for containerizing the entire application (both backend and frontend) in a development environment.
- **docker-compose.yml**: Used for containerizing the entire application (both backend and frontend) in a production environment.

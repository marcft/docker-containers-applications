# Phonebook API

This is the backend for a simple phonebook application. It provides RESTful API endpoints to manage phone contacts.

## Features

- Store, retrieve, update and delete contacts
- Search contacts by name
- Validation for contact data
- MongoDB for data storage
- Express for the API server
- Mongoose for MongoDB object modeling

## API Endpoints

- `GET /api/persons` - Get all contacts
- `GET /api/persons/:id` - Get a specific contact
- `POST /api/persons` - Create a new contact
- `PUT /api/persons/:id` - Update a contact
- `DELETE /api/persons/:id` - Delete a contact

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

## Docker Support

This application can be containerized using Docker:

- Use the provided Dockerfile for production builds
- Use dev.Dockerfile for development environments
- Can be run as part of the complete application stack with docker-compose

## Related Components

This backend works with the Phonebook App frontend which provides the user interface for managing contacts.

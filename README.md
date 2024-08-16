# Todo App

This application consists of a frontend written in React TypeScript and a backend with two microservices (User Service and Todo Service) written in Node TypeScript. The application uses MongoDB as the database, which will be run using the official Docker image. The rest of the application will be run without Docker.

## Table of Contents

- [Todo App](#todo-app)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [MongoDB](#mongodb)
    - [Backend Services](#backend-services)
    - [Frontend](#frontend)
  - [Build](#build)
    - [Backend Services](#backend-services-1)
    - [Frontend](#frontend-1)
  - [Running the Application](#running-the-application)
    - [MongoDB](#mongodb-1)
    - [Backend](#backend)
    - [Frontend](#frontend-2)
  - [Docker](#docker)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Docker
- Docker Compose (optional, for easier MongoDB setup)

## Installation

### MongoDB

1. Pull the official MongoDB Docker image:

    ```sh
    docker pull mongo
    ```

2. Run MongoDB in a Docker container:

    ```sh
    docker run -d --network my-network -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin MONGO_INITDB_ROOT_PASSWORD=password --name mongo mongo:latest
    ```

### Backend Services

1. Install dependencies for User Service:

    ```sh
    cd backend/user-service
    npm install
    ```

2. Install dependencies for Todo Service:

    ```sh
    cd ../todo-service
    npm install
    ```

### Frontend

1. Navigate to the frontend directory and install dependencies:

    ```sh
    cd ../../frontend
    npm install
    ```

## Build

### Backend Services

1. Build the User Service:

    ```sh
    cd ../backend/user-service
    npm run build
    ```

2. Build the Todo Service:

    ```sh
    cd ../todo-service
    npm run build
    ```

### Frontend

1. Build the frontend:

    ```sh
    cd ../../frontend
    npm run build
    ```

## Running the Application

### MongoDB

Ensure MongoDB is running in the Docker container:

```sh
docker start mongodb
```

### Backend

1. Start the User Service:

```sh 
cd ../backend/user-service
npm start
```
2. Start the Todo Service:

```sh 
cd ../backend/todo-service
npm start
```
### Frontend

1. Start the frontend

```sh 
cd ../../frontend
npm start
```

## Docker

1. Run the commands from the file `docker-commands.md`

## NOTE: CHANGE THE HOST IN VERITYTOKEN IN TODOSERVICE TO LOCALHOST:4001 IF YOU WANT TO RUN THE PROGRAM LOCALLY

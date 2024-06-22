# Task Management API
This project is a RESTful API built with Node.js, Express.js, and MongoDB to manage tasks. It includes endpoints for creating, retrieving, updating, and deleting tasks, with validation for task data.

## Table of Contents
1. [Features](#1-features)
2. [Installation](#2-installation)
3. [Usage](#3-usage)
4. [Environment Variables](#4-environment-variables)
5. [Error Handling](#5-error-handling)
6. [License](#6-license)
7. [Find a bug?](#7-find-a-bug)

## 1. Features
- **CRUD Operations:** Create, Read, Update, and Delete tasks.
- **Validation:** Input validation using `express-validator`.
- **Error Handling:** Centralized error handling for better code maintenance.
- **Logging:** Request logging using `morgan`.
- **Environment Variables:** Configuration using `.env` file.
- **MongoDB Integration:** Database connection and schema management with `mongoose`.
- **Modular Structure:** Separation of concerns using controllers, middleware, and routes.

## 2. Installation
1. **Clone the repository**
2. **Navigate to the Project Directory:**
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```plaintext
   PORT=5000
   NODE_ENV=development
   MONGO_URI=<your-mongodb-uri>
   ```
   Replace `<your-mongodb-uri>` with your MongoDB connection string.
5. Node.js version 12 or higher is recommended.

## 3. Usage
1. **Start the server:**
- Development mode:
  ```bash
  npm start
  ```
  
### UI and Public Folder
This project includes a `public` folder that serves static assets for the frontend UI. You can place HTML, CSS, JavaScript, or other resources here to enhance the project with a frontend interface. The API itself does not serve these assets directly; you'll need a separate frontend application or tool (like a static file server) to interact with the API endpoints.
- The API will be available at `http://localhost:5000/index.html`.

### API Endpoints
Use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test the following endpoints.
The API will be available at `http://localhost:5000/api/v1/tasks`.
- **GET `/api/v1/tasks`:**
  - Fetches all tasks.
- **POST `/api/v1/tasks`:**
  - Creates a new task.
  - Requires a JSON body with `name` field.
- **GET `/api/v1/tasks/:id`:**
  - Fetches a single task by ID.
  - Requires a valid MongoDB ID in the URL parameter.
- **PATCH `/api/v1/tasks/:id`:**
  - Updates a task by ID.
  - Requires a valid MongoDB ID in the URL parameter and a JSON body with `name` field.
- **DELETE `/api/v1/tasks/:id`:**
  - Deletes a task by ID.
  - Requires a valid MongoDB ID in the URL parameter.

## 4. Environment Variables
- `PORT`: Port number for the server (default: `5000`).
- `NODE_ENV`: Environment mode (`development` or `production`).
- `MONGO_URI`: MongoDB connection URI.

## 5. Error Handling
- Centralized error handling using middleware (`errorHandlerMiddleware`).
- Validation errors for API requests are returned as JSON with a `400 Bad Request` status.

## 6. License
This project is licensed under the [ISC License](https://opensource.org/license/isc-license-txt). See the LICENSE file for more details.

## 7. Find a bug
feel free to submit an issue (with or without a fix) or an improvement for this project. I would appreciate that.



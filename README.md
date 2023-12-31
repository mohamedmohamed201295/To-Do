# ToDo website (server side)
## Simple server app that provides CRUD APIs using MongoDB, Node.js, and Express web framework.

This project is to create, delete, edit, and show all tasks or a single task. Returns JSON data.

## To Run This Project

### 1. In order to run the project, you need:
- A text editor like <a href="https://code.visualstudio.com/">VS code.</a>
- <a href="https://nodejs.org/en">Node.js.</a>
- <a href="https://www.mongodb.com/atlas/database">Atlas MongoDB</a> hosting account(free).
- <a href="https://www.postman.com/">Postman</a> to send your requests


### 2. Run the project locally:

1- fork the repo.

2- Clone your repo down to your local machine.

3- Create a .env file and set the MONGO_URI variable equal to the DB connection string
(don't forget to replace '<password>' and set your collection name between '/' and '?')
, NODE_ENV to 'development' mode, and PORT variable. To avoid port collisions,
 in the source code port value is 5000.

4- Install dependencies by typing <kbd>npm install</kbd> in the terminal
 and run the server locally with <kbd>npm start</kbd> and this will run
 the project in development mode and if you want to run it in production mode, you can
 run <kbd>npm run start:prod</kbd>.


### 3. Test APIs:
Now you can send requests by postman to check APIs
, validation layer (it is located in the routes/validation-layer folder)
, middleware error handler (located in middleware)
and schema validation (in the models folder).

- To create a task: POST localhost:'the port number'/api/v1/tasks -set Body/Raw/JSON/set "name" -send
- To get all tasks: GET localhost:'the port number'/api/v1/tasks -send
- To get a task: GET localhost:'the port number'/api/v1/tasks/'task id' -send
- To edit a task: PUT localhost:'the port number'/api/v1/tasks/'task id' -set Body/Raw/JSON/set "name" 
  and "completed"(this is an optional field) -send
- To delete a task: DELETE localhost:'the port number'/api/v1/tasks/'task id' -send

## Find a bug?
feel free to submit an issue (with or without a fix) or an improvement for this project. I would appreciate that.



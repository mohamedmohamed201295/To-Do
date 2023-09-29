import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import express from "express";
const app = express();

import tasksRouter from "./routes/tasks.js";

import connectDB from "./db/connect.js";

import errorHandlerMiddleware from "./middleware/error-handler.js";

import morgan from "morgan";

app.use(morgan("combined"));
console.log(`mode: ${process.env.NODE_ENV}`);

// middleware

app.use(express.json());

// routes

app.use("/api/v1/tasks", tasksRouter);

// error handler
app.use(errorHandlerMiddleware);
app.use((req, res) => res.status(404).send("Route does not exist"));

// connectDB
const port = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);
const server = app.listen(
  port,
  console.log(`Server is listening on port ${port}...`)
);

process.on("unhandledRejection", (err) => {
  console.log(`Unhandled Rejection Error: ${err.name} | ${err.message}`);
  server.close(() => {
    console.log("shutting down....");
    process.exit(1);
  });
});

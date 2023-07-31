const express = require("express");
const colors = require("colors");
const router = require("./Routes/goalsRoutes");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const connectToDb = require("./utils/db.js");
const dotenv = require("dotenv").config();

const app = express();

connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;

app.use("/api/goals", router);

app.use(errorHandler);

app.listen(port, (req, res) => {
  console.log(`App listening: http://localhost:${port}`);
});

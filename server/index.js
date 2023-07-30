const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

// Folders and Files
const bookRouter = require("./routes/bookRoutes");
const userRouter = require("./routes/userRoutes");

// configuration
const app = express();

// middlware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// Advanced routing
app.use("/api/v1/books", bookRouter);

// Number of Users
app.use("/api/v1/users", userRouter);

// Database and application connectivity
app.listen(port, () => {
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log(`DB Connection successfull`);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`Server is running on ${port}`);
});

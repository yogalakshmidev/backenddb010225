const mongoose = require("mongoose");
const app = require("./app");
// import dotenv
require("dotenv").config();

// for database connnection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connect to MongoDb");
    // server started
    app.listen(3001, () => {
      console.log("server started on http://localhost:3001");
    });
  })
  .catch((error) => {
    console.log("error in mongodb connection", error);
  });

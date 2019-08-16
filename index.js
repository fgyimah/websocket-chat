//initialize environment variables
require("dotenv").config();

//install required modules
const express = require("express");

const app = express();
const port = process.env.PORT;

//start the application
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});

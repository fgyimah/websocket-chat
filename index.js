//initialize environment variables
require("dotenv").config();

//install required modules
const express = require("express");
const socket = require("socket.io");

const app = express();
const port = process.env.PORT;

//static files
app.use(express.static("public"));

//start the application
const server = app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});

//socket setup
const io = socket(server);
io.on("connection", socket => {
  console.log("made socket connection");

  //listen to chat messages
  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });

  //listening for typing messages
  socket.on("typing", data => {
    socket.broadcast.emit("typing", data);
  });
});

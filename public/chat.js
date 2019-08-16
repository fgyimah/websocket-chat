//make connection
var socket = io.connect("http://localhost:8989");

//query DOM
var message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  output = document.getElementById("output"),
  btn = document.getElementById("send"),
  feedback = document.getElementById("feedback");

//emit events
btn.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keypress", function() {
  socket.emit("typing", handle.value);
});

//listen for message events
socket.on("chat", function(data) {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + data.handle + ": </strong>" + data.message + "</p";
});

//listen for typing broadcasts
socket.on("typing", function(data) {
  feedback.innerHTML = "<p><em>" + data + " is typing a message.....</em></p>";
});

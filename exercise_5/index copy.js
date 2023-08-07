const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const PORT = 3000;

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  //   io.emit("connection", "a user connected"); //this line broadcasts when USER connects but conflicts with line below
  socket.broadcast.emit("connection", "a user connected");
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("disconnected", "browser user disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log("message" + msg); //this is for terminal logging(aka server)
    io.emit("chat message", msg); //this is for the browser (client)
  });
});

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

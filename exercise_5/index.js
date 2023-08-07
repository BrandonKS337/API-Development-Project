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

const connectedUsers = new Set();

io.on("connection", (socket) => {
  socket.emit("get nickname");
  
  socket.on("disconnect", () => {
    if (socket.nickname) {
      connectedUsers.delete(socket.nickname);
      io.emit("user left", socket.nickname);
    }
  });

  socket.on("set nickname", (nickname) => {
    socket.nickname = nickname;
    connectedUsers.add(nickname);
    socket.broadcast.emit("user joined", nickname);
  });

  socket.on("get connected users", () => {
    socket.emit("connected users", Array.from(connectedUsers));
  });
  
  socket.on("typing", () => {
    socket.broadcast.emit("typing", socket.nickname);
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", `${socket.nickname}: ${msg}`);
  });
});

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

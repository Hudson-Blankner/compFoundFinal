// server.js
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Broadcast player movement
  socket.on("playerMove", (data) => {
    socket.broadcast.emit("playerMoved", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = 3000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));

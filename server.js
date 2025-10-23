// const express = require("express");
// const app = express();
// const http = require("http").createServer(app);
// const io = require("socket.io")(http);

// // 👇 THIS LINE IS SUPER IMPORTANT
// app.use(express.static("public"));

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);
// });

// http.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

let players = {};

io.on("connection", (socket) => {
  console.log("Player connected:", socket.id);

  // Add new player
  players[socket.id] = { x: 100, y: 100 };

  // Send current players to new player
  socket.emit("currentPlayers", players);

  // Tell others a new player joined
  socket.broadcast.emit("newPlayer", { id: socket.id, x: 100, y: 100 });

  // Listen for movement
  socket.on("playerMove", (data) => {
    if (players[socket.id]) {
      players[socket.id].x = data.x;
      players[socket.id].y = data.y;
      // Send updated position to everyone (including sender)
      io.emit("playerMoved", { id: socket.id, x: data.x, y: data.y });
    }
  });

  // Remove player on disconnect
  socket.on("disconnect", () => {
    console.log("Player disconnected:", socket.id);
    delete players[socket.id];
    io.emit("playerDisconnected", socket.id);
  });
});

const PORT = 3000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
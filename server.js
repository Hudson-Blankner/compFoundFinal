const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

let players = {};
let joinCount = 0; // keeps track of join order

io.on("connection", (socket) => {
  console.log("Player connected:", socket.id);
  joinCount++;

  // Decide color based on join order
  let color = "white";
  if (joinCount === 1) color = "purple";
  else if (joinCount === 2) color = "orange";
  else if (joinCount === 3) color = "blue";

  // Add new player
  players[socket.id] = { x: 100, y: 100, color };

  // Send current players to new player
  socket.emit("currentPlayers", players);

  // Tell others about new player
  socket.broadcast.emit("newPlayer", { id: socket.id, x: 100, y: 100, color });

  // Handle movement
  socket.on("playerMove", (data) => {
    if (players[socket.id]) {
      players[socket.id].x = data.x;
      players[socket.id].y = data.y;
      io.emit("playerMoved", { id: socket.id, x: data.x, y: data.y });
    }
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log("Player disconnected:", socket.id);
    delete players[socket.id];
    io.emit("playerDisconnected", socket.id);
  });
});

const PORT = 3000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
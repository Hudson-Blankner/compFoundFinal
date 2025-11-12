const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

let players = {};
let joinCount = 0; // keeps track of join order

io.on("connection", (socket) => {
  console.log("Player connected:", socket.id);
  joinCount++;

  // Decide color based on join order
  let color = "blue";
  if (joinCount === 1) color = "blue";
  else if (joinCount === 2) color = "purple";
  else if (joinCount === 3) color = "orange";
  else if (joinCount > 3) joinCount -= 3;

  // Add new player
  players[socket.id] = { x: 100, y: 100, r: 0, stage: 0, color };

  // Send current players to new player
  socket.emit("currentPlayers", players);

  // Tell others about new player
  socket.broadcast.emit("newPlayer", {
    id: socket.id,
    x: 100,
    y: 100,
    r: 0,
    stage: 0,
    color,
  });

  // Handle movement
  socket.on("playerMove", (data) => {
    if (players[socket.id]) {
      players[socket.id].x = data.x;
      players[socket.id].y = data.y;
      players[socket.id].r = data.r;
      players[socket.id].stage = data.stage;
      io.emit("playerMoved", {
        id: socket.id,
        x: data.x,
        y: data.y,
        r: data.r,
        stage: data.stage,
      });
    }
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log("Player disconnected:", socket.id);
    delete players[socket.id];
    io.emit("playerDisconnected", socket.id);
  });
});
//socket = io("http://localhost:3000");

const PORT = 3000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//ngrok http 3000
//node server.js
let socket;
let players = {};
let myId;
let x = 100, y = 100;

function setup() {
  createCanvas(600, 400);
  socket = io();

  socket.on("connect", () => {
    myId = socket.id;
  });

  // Receive current players
  socket.on("currentPlayers", (serverPlayers) => {
    players = serverPlayers;
  });

  // New player joined
  socket.on("newPlayer", (data) => {
    players[data.id] = data;
  });

  // Player moved
  socket.on("playerMoved", (data) => {
    if (players[data.id]) {
      players[data.id].x = data.x;
      players[data.id].y = data.y;
    }
  });

  // Player disconnected
  socket.on("playerDisconnected", (id) => {
    delete players[id];
  });
}

function draw() {
  background(220);

  // Move your player
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;
  if (keyIsDown(UP_ARROW)) y -= 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;

  // Send your position to server
  socket.emit("playerMove", { x, y });

  // Draw all players
  for (let id in players) {
    if (id === myId) fill("blue");
    else fill("red");
    ellipse(players[id].x, players[id].y, 40);
  }
}

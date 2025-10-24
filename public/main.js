let socket;
let myId;
let player = {};
let x = 100, y = 100;

function setup() {
  createCanvas(600, 400);
  socket = io();

  socket.on("connect", () => {
    myId = socket.id;
  });

  socket.on("currentPlayers", (serverPlayers) => {
    players = serverPlayers;
  });

  socket.on("newPlayer", (data) => {
    players[data.id] = data;
  });

  socket.on("playerMoved", (data) => {
    if (players[data.id]) {
      players[data.id].x = data.x;
      players[data.id].y = data.y;
    }
  });

  socket.on("playerDisconnected", (id) => {
    delete players[id];
  });
}

function draw() {
  background(220);

  // Player Move (change to dependent on stagechoice)
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;
  if (keyIsDown(UP_ARROW)) y -= 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;

  // Sends your position to the server
  socket.emit("playerMove", { x, y });

  // goes through drawing all the different colors
  for (let id in players) {
    fill(players[id].color || "white");
    circle(players[id].x, players[id].y, 40);
  }
}

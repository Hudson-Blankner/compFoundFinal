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

  socket.on("playerMoved", (data) => {
    players[data.id] = data;
  });
}

function draw() {
  background(220);
  // Move your player
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;
  if (keyIsDown(UP_ARROW)) y -= 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;

  // Send position to others
  socket.emit("playerMove", { id: myId, x, y });

  // Draw you
  fill("blue");
  ellipse(x, y, 40);
  console.log(x);

  // Draw others
  fill("red");
  for (let id in players) {
    if (id !== myId) ellipse(players[id].x, players[id].y, 40);
  }
}

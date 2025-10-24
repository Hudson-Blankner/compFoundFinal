let socket;
let myId;
let players = {};
let x = 100, y = 100;

function setup() {
  createCanvas(canvW, canvH);
  socket = io();

  socket.on("connect", () => {
    myId = socket.id;
  });

  socket.on("currentPlayers", (serverPlayers) => {
    players = serverPlayers;
  });

  socket.on("newPlayer", (data) => {
    players[data.id] = data;
    for (let id in players) {
      if (players[data.id].color === "blue") {
        x = playerOneStartX
        y = playerOneStartY
      }
      else if (players[data.id].color === "purple") {
        x = playerTwoStartX
        y = playerTwoStartY
      }
      else if (players[data.id].color === "orange") {
        x = playerThreeStartX
        y = playerThreeStartY
      }
    }
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
  //background(220)
  // Player Move (change to dependent on stagechoice)
  if (stageCnt === 0) {
    titleStage();
  } 
  else if (stageCnt === 1) {
    platformer();
  }
  else {
    
  }

  // Sends your position to the server
  socket.emit("playerMove", { x, y });

  // goes through drawing all the different colors
  for (let id in players) {
    fill(players[id].color || "white");
    circle(players[id].x, players[id].y, 40);
  }
}

let socket;
let myId;
let players = {};
let x = 100, y = 100;
let gameChoiceMusic;

function setup() {
  createCanvas(canvW, canvH);
  socket = io();
  function preload() {
    gameChoiceMusic = loadSound('public/music/GameChoiceMusic.mp3');
  } 
  socket.on("connect", () => {
    myId = socket.id;
    x = playerTwoStartX;
    y = playerTwoStartY;
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
  //background(220)
  // Player Move (change to dependent on stagechoice)
  if (stageCnt === 0) {
    titleStage();
  } 
  else if (stageCnt === 1) {
    if (titleSetup) {
      for (let id in players) {
       if (players[id].color === "blue") {
        x = playerOneStartX
        y = playerOneStartY+250
       }
       else if (players[id].color === "purple") {
        x = playerTwoStartX
        y = playerTwoStartY+250
       }
       else if (players[id].color === "orange") {
        x = playerThreeStartX
        y = playerThreeStartY+250
       }
      }
    }
    titleSetup = false;
    // gameChoiceMusic.loop();
    // gameChoiceMusic.setVolume(0.5);
    gameChoice();
  }
  else if (stageCnt === 2){
    platformer();
  }

  // Sends your position to the server
  socket.emit("playerMove", { x, y });

  // goes through drawing all the different colors
  for (let id in players) {
    let bluePlayerOn = 0;
    let purplePlayerOn = 0;
    let orangePlayerOn = 0;
    if (players[id].color === "blue"){
      bluePlayerOn = 1;
    }
    if (players[id].color === "purple"){
      purplePlayerOn = 1;
    }
    if (players[id].color === "orange"){
      orangePlayerOn = 1;
    }
    playerCount = bluePlayerOn+purplePlayerOn+orangePlayerOn
    fill(players[id].color || "white");
    if (id != myId) {
      if(players[id].x === players[myId].x && players[id].y === players[myId].y) {
        x += 100
      }
    }
    square(players[id].x-20, players[id].y-20, 40);
  }
}

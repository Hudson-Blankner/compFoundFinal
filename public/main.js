let socket;
let myId;
let players = {};
let x = 100,
  y = 100,
  r = false,
  stage = 0,
  wingame = false,
  pDirection = 0;
// let gameChoiceMusic;

function setup() {
  createCanvas(canvW, canvH);
  socket = io();
  // function preload() {
  //   gameChoiceMusic = loadSound('public/music/GameChoiceMusic.mp3');
  // }
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
      players[data.id].r = data.r;
      players[data.id].stage = data.stage;
      players[data.id].wingame = data.wingame;
    }
  });

  socket.on("playerDisconnected", (id) => {
    delete players[id];
  });
}
function draw() {
  //background(220)
  // Player Move (change to dependent on stagechoice)
  if (players[myId] == null) {
    return;
  }

  if (players[myId].stage === 0) {
    titleStage();
  } else if (players[myId].stage === 1) {
    if (titleSetup) {
      if (players[myId].color === "blue") {
        x = playerOneStartX;
        y = playerOneStartY + 250;
      } else if (players[myId].color === "purple") {
        x = playerTwoStartX;
        y = playerTwoStartY + 250;
      } else if (players[myId].color === "orange") {
        x = playerThreeStartX;
        y = playerThreeStartY + 250;
      }
    }
    titleSetup = false;
    // gameChoiceMusic.loop();
    // gameChoiceMusic.setVolume(0.5);
    gameChoice();
  } else if (players[myId].stage === 2) {
    platformer();
  } else if (players[myId].stage === 3) {
    spaceShipGame();
  } else if (players[myId].stage === 4) {
    gunGame();
  } else if (players[myId].stage === 5) {
    if (gameIsOn) {
      let mazeWinner = "red";
      x = 0;
      y = 0;
      for (let id in players) {
        if (players[id].r != false){
          r = players[id].r;
        }
      }
      if (r === false){
      for (let i = 0; i < mazeX; i++) {
        mazeArray[i] = [];
        for (let j = 0; j < mazeY; j++) {
          mazeArray[i][j] = [false, false, false, false, false];
        }
      }
      while (possPath.length != 0) {
        mazeEater();
      }
      r = mazeArray;
      }
      mazeArray = r;
    }
    gameIsOn = false;
    mazeGame();
  } else if (players[myId].stage === 6) {
    spaceGame();
  } else if (players[myId].stage === 7) {
    plinkoGame();
  } else if (players[myId].stage === 8) {
    tronGame();
  } else if (players[myId].stage === 9) {
    tagGame();
  } else if (players[myId].stage === 10) {
    huntGame();
  } else if (players[myId].stage === 11) {
    tankGame();
  }

  //stageCnt = stage;

  // Sends your position to the server
  socket.emit("playerMove", { x, y, r, stage });

  // goes through drawing all the different colors
  let bluePlayerOn = 0;
  let purplePlayerOn = 0;
  let orangePlayerOn = 0;
  allGame = 0;
  for (let id in players) {
    if (players[id].color === "blue") {
      bluePlayerOn = 1;
    }
    if (players[id].color === "purple") {
      purplePlayerOn = 1;
    }
    if (players[id].color === "orange") {
      orangePlayerOn = 1;
    }
    playerCount = bluePlayerOn + purplePlayerOn + orangePlayerOn;
    fill(players[id].color || "white");
    if (id != myId) {
      if (players[myId].stage != 5) {
        if (
          players[id].x === players[myId].x &&
          players[id].y === players[myId].y
        ) {
          x += 100;
        }
      }
    }
    push();
    angleMode(DEGREES);
    translate(players[id].x, players[id].y);
    //rotate(players[id].r);
    if (players[myId].stage === 5){
      rect(0,0,(mazeSizeX/mazeX), (mazeSizeY/mazeY))
    } else{
      if (sprinting){
        stroke(255)
      } else {
        stroke(0)
      }
      strokeWeight(3)
      square(-20, -20, 40);
      stroke(0)
      fill(0)
      if(stage === 0 || stage === 1 || stage === 2){
      if (pDirection === 0){
        square(-15, -2, 5)
        square(10,-2, 5)
        rect(-3,4, 6, 0.5)
      }
      if (pDirection === 1){
        square(-15, -12, 5)
        square(10,-12, 5)
        rect(-3,-8, 6, 0.5)
      }
      if (pDirection === 3){
        square(-15, 8, 5)
        square(10,8, 5)
        rect(-3,12, 6, 0.5)
      }
      if (pDirection === 4){
        square(-8, -2, 5)
        rect(-20,4, 6, 0.5)
      }
      if (pDirection === 2){
        square(3, -2, 5)
        rect(14,4, 6, 0.5)
      }
      }
    }
    pop();
    if (players[id].stage > stage && gameOver === false) {
      stage = players[id].stage;
    }
    if (players[id].stage < stage && gameOver === true) {
      titleSetup = true;
      r = false;
      stage = players[id].stage;
    }
    if (players[id].stage === 1){
      allGame += 1;
    }
    if (allGame === playerCount){
      gameOver = false;
      r = false;
    }
  }
}
//ngrok http 3000
//node server.js
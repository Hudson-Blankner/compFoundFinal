//                  ==== Global variables ====
let canvW = 1400
let canvH = 700
const canvMid = [canvW/2, canvH/2]
let playerCount = 0
//                  ==== Global variables ====
//                  ==== Wipe Function ====
// this will be used to save memory by wipping lists between stages. Ideally it will be called ONCE-
// at the start of each stage
function wipe(){
    titleTxt.length = 0
}
//                  ==== Wipe Function ====

//                  ==== Calling in Sounds and images ====

//                  ==== Stage variables ====

//                  ==== mazeShit ====
let allGame;
let allDone;
let gameOver = false;
let wanderer = [0,0]
let gameIsOn = true;
let mazeSizeX = 1400;
let mazeSizeY = 700;
let mazeX = 65;
let mazeY = 33;
let mazeArray = [];
let mazeWalker = [0,0];
let openSpace = [];
let direction;
let possPath = [[0,0]];
function getRandomInteger(min, max) 
{
  min = Math.ceil(min); // Ensure min is a whole number (rounds up)
  max = Math.floor(max); // Ensure max is a whole number (rounds down)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function mazeEater()
{
  randomSeed(37);
  if (mazeArray[mazeWalker[0]][mazeWalker[1]][0] === false)
    {
      mazeArray[mazeWalker[0]][mazeWalker[1]][0] = true;
    }
  openSpace = [];
  //left
  if (mazeWalker[0] != 0)
    {
      if (mazeWalker[0] === mazeX-1 && mazeWalker[1] === mazeY-1) 
        {} else {
          if (mazeArray[mazeWalker[0]-2][mazeWalker[1]][0] === false)
          {
            append(openSpace, 4)
          }    
        }
    }
  //right
  if (mazeWalker[0] != mazeX - 1)
    {
      if (mazeArray[mazeWalker[0]+2][mazeWalker[1]][0] === false)
        {
          append(openSpace, 2)
        }
    }
  //up
  if (mazeWalker[1] != 0)
    {
      if (mazeWalker[0] === mazeX-1 && mazeWalker[1] === mazeY-1) 
        {} else {
      if (mazeArray[mazeWalker[0]][mazeWalker[1]-2][0] === false)
        {
          append(openSpace, 1)
        }
        }
    } 
  //down
  if (mazeWalker[1] != mazeY - 1)
    {
      if (mazeArray[mazeWalker[0]][mazeWalker[1]+2][0] === false)
        {
          append(openSpace, 3)
        }
    }
  if (openSpace != []) 
    {
    direction = openSpace[getRandomInteger(0,openSpace.length)]
    if (direction === 1)
      {
      if (openSpace.length > 1) 
      {
        append(possPath, [mazeWalker[0],mazeWalker[1]])
      }
      mazeArray[mazeWalker[0]][mazeWalker[1]-1][0] = true
      mazeWalker = [mazeWalker[0],mazeWalker[1]-2]
      }
    if (direction === 2)
      {
      if (openSpace.length > 1) 
      {
        append(possPath, [mazeWalker[0],mazeWalker[1]])
      }
      mazeArray[mazeWalker[0]+1][mazeWalker[1]][0] = true
      mazeWalker = [mazeWalker[0]+2,mazeWalker[1]]
      }
    if (direction === 3)
      {
      if (openSpace.length > 1) 
      {
        append(possPath, [mazeWalker[0],mazeWalker[1]])
      }
      mazeArray[mazeWalker[0]][mazeWalker[1]+1][0] = true
      mazeWalker = [mazeWalker[0],mazeWalker[1]+2]
      }
    if (direction === 4)
      {
      if (openSpace.length > 1) 
      {
        append(possPath, [mazeWalker[0],mazeWalker[1]])
      }
      mazeArray[mazeWalker[0]-1][mazeWalker[1]][0] = true
      mazeWalker = [mazeWalker[0]-2,mazeWalker[1]]
      }
    }
  if (openSpace.length === 0) 
    {
      if (possPath.length != 0)
          {
            mazeWalker = [possPath[possPath.length-1][0], possPath[possPath.length-1][1]]
            shorten(possPath)
          }
    }
  if (mazeWalker[0] === mazeX-1 && mazeWalker[1] === mazeY-1) 
    {
      mazeArray[mazeWalker[0]][mazeWalker[1]][4] = true
    }
}
//                  ==== mazeShit ====

let playersOnPlat = 0
let playersOnShip = 0
let playersOnGun = 0
let playersOnMaze = 0
let playersOnSpace = 0
let playersOnPlink = 0
let playersOnTron = 0
let playersOnTag = 0
let playersOnHunt = 0
let playersOnTank = 0
let playersOnPlatCharge = 0
let playersOnShipCharge = 0
let playersOnGunCharge = 0
let playersOnMazeCharge = 0
let playersOnSpaceCharge = 0
let playersOnPlinkCharge = 0
let playersOnTronCharge = 0
let playersOnTagCharge = 0
let playersOnHuntCharge = 0
let playersOnTankCharge = 0
let titleSetup = true;
let startButtonCount = 0;
let stageCnt = 0;
const startBoxW = 200; const startBoxH = 100;
const startBox = {x: canvMid[0] -(startBoxW/2), y: canvMid[1], w: 200, h:100}
const platGameBox = {x: 10, y: 10, w: 337.5, h:220}
const shipGameBox = {x: 357.5, y: 10, w: 337.5, h:220}
const gunGameBox = {x: 705, y: 10, w: 337.5, h:220}
const mazeGameBox = {x: 1052.5, y: 10, w: 337.5, h:220}
const spaceGameBox = {x: 1052.5, y: 240, w: 337.5, h:220}
const plinkGameBox = {x: 1052.5, y: 470, w: 337.5, h:220}
const tronGameBox = {x: 10, y: 240, w: 337.5, h:220}
const tagGameBox = {x: 10, y: 470, w: 337.5, h:220}
const huntGameBox = {x: 357.5, y: 470, w: 337.5, h:220}
const tankGameBox = {x: 705, y: 470, w: 337.5, h:220}
let titleTxt = []
let playerOneStartX = startBox.x
let playerOneStartY = 100
let playerTwoStartX = startBox.x + (startBox.w/2)
let playerTwoStartY = 100
let playerThreeStartX = startBox.x + startBox.w
let playerThreeStartY = 100
class titleText {
    constructor(x,y,color,stroke,size,text = ""){
        this.x = x; 
        this.y = y; 
        this.color = color; 
        this.stroke = stroke; 
        this.size = size; 
        this.text = text;
    }
    draw (){
    push()
    fill(this.color); strokeWeight(this.stroke); textSize(this.size);
    text(this.text, this.x, this.y)
    pop()
    }
}
//                  ==== Stage variables ====
//                  ==== Tag variables ====
class playerCollision {
    constructor(canRight, canLeft , canDown, canUp){
        this.canRight = true
        this.canLeft = true
        this.canDown = true
        this.canUp = true
    }
    basicPlayerCollision(){
        for (let id in players) {
            if (id != myId) {
                if (players[myId].x >= players[id].x-40){this.canRight = false} else {this.canRight = true}
                if (players[myId].x <= players[id].x+40){this.canLeft = false} else {this.canLeft = true}
                if (players[myId].y >= players[id].y-40){this.canDown = false} else {this.canDown = true}
                if (players[myId].y <= players[id].y+40){this.canUp = false} else {this.canUp = true}
            }
        }
    }
    basicPlayerMovement(){
        if (this.canLeft) {
            if (keyIsDown(LEFT_ARROW)) x -= 5;
        }
        if (this.canRight) {
            if (keyIsDown(RIGHT_ARROW)) {
              x += 5;
            }
        }
        if (this.canUp) {
            if (keyIsDown(UP_ARROW)) y -= 5;
        }
        if (this.canDown) {
            if (keyIsDown(DOWN_ARROW)) y += 5; 
        }
    }
}
//                  ==== Tag variables ====



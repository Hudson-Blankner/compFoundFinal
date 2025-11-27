function mazeGame(){
    function walls()
{
  for (let sx = 0; sx < mazeX; sx += 1) 
  {
    for (let sy = 0; sy < mazeY; sy += 1) 
    {
      if (mazeArray[sx][sy][0])
        {
          if (mazeArray[sx][sy][1] === false && mazeArray[sx][sy][2] === false && mazeArray[sx][sy][3] === false)
            {
            if (mazeArray[sx][sy][4] === true){
              fill("red");
              rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
            } else {
            noStroke()
            fill(255)
            rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
            }
          } else 
              {
                fill(players[myId].color);
                rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
            }
          }
      }
  }
}
allDone = 0;
for (let id in players) {
  allDone += 1;
  if (players[id].r === true){
    gameOver = true;
    r = true;
  }
}
if (gameOver){
  background(255)
  fill(0);
  textSize(100);
  text("YOU WIN",700,350);
  if (allDone === playerCount){
    if (keyIsDown(32)){
      titleSetup = true;
      stage = 1;
      r = false;
    }
  }
} else {
  background(0)
  walls();
if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
  if (wanderer[0] != 0 && mazeArray[wanderer[0]-1][wanderer[1]][0] && mazeArray[wanderer[0]-1][wanderer[1]][1] === false){
    x -= (mazeSizeX/mazeX);
    mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[0] -= 1;
  }
  if (wanderer[0] != 0 && (mazeArray[wanderer[0]-1][wanderer[1]][1] || mazeArray[wanderer[0]-1][wanderer[1]][2] || mazeArray[wanderer[0]-1][wanderer[1]][3]) && mazeArray[wanderer[0]-1][wanderer[1]][0]){
    x -= (mazeSizeX/mazeX);
    mazeArray[wanderer[0]][wanderer[1]][1] = false
    wanderer[0] -= 1;
  }
}
if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
  if (wanderer[0] != mazeX-1 && mazeArray[wanderer[0]+1][wanderer[1]][0] && mazeArray[wanderer[0]+1][wanderer[1]][1] === false){
    x += (mazeSizeX/mazeX);
    mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[0] += 1;
  }
  if (wanderer[0] != mazeX-1 && (mazeArray[wanderer[0]+1][wanderer[1]][1] || mazeArray[wanderer[0]+1][wanderer[1]][2] || mazeArray[wanderer[0]+1][wanderer[1]][3]) && mazeArray[wanderer[0]+1][wanderer[1]][0]){
    x += (mazeSizeX/mazeX);
    mazeArray[wanderer[0]][wanderer[1]][1] = false
    wanderer[0] += 1;
  }
}
if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
  if (wanderer[1] != 0 && mazeArray[wanderer[0]][wanderer[1]-1][0] && mazeArray[wanderer[0]][wanderer[1]-1][1] === false){
    y -= (mazeSizeY/mazeY);
    mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[1] -= 1;
  }
  if (wanderer[1] != 0 && (mazeArray[wanderer[0]][wanderer[1]-1][1] || mazeArray[wanderer[0]][wanderer[1]-1][2] || mazeArray[wanderer[0]][wanderer[1]-1][3]) && mazeArray[wanderer[0]][wanderer[1]-1][0]){
    y -= (mazeSizeY/mazeY);
    mazeArray[wanderer[0]][wanderer[1]][1] = false
    wanderer[1] -= 1;
  }
}
if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
  if (wanderer[1] != mazeY-1 && mazeArray[wanderer[0]][wanderer[1]+1][0] && mazeArray[wanderer[0]][wanderer[1]+1][1] === false){
    y += (mazeSizeY/mazeY);
    mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[1] += 1;
  }
  if (wanderer[1] != mazeY-1 && (mazeArray[wanderer[0]][wanderer[1]+1][1] || mazeArray[wanderer[0]][wanderer[1]+1][2] || mazeArray[wanderer[0]][wanderer[1]+1][3]) && mazeArray[wanderer[0]][wanderer[1]+1][0]){
    y += (mazeSizeY/mazeY);
    mazeArray[wanderer[0]][wanderer[1]][1] = false
    wanderer[1] += 1;
  }
}
if (wanderer[0] === mazeX - 1 && wanderer[1] === mazeY - 1){
  r = true;
  gameOver = true;
}
}
}
function mazeGame(){
    r = mazeArray;
    background(0)
    function walls()
{
  for (let sx = 0; sx < mazeX; sx += 1) 
  {
    for (let sy = 0; sy < mazeY; sy += 1) 
    {
      if (mazeArray[sx][sy][0])
        {
          if ((mazeArray[sx][sy][1]) === false && mazeArray[sx][sy][2] === false && mazeArray[sx][sy][3] === false)
            {
            noStroke()
            fill(255)
            rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
            } else 
              {
                fill("blue");
                if (mazeArray[sx][sy][1] === true && mazeArray[sx][sy][2] === false && mazeArray[sx][sy][3] === false) {
                  fill("blue");
                }
                if (mazeArray[sx][sy][1] === false && mazeArray[sx][sy][2] === true && mazeArray[sx][sy][3] === false) {
                  fill("purple");
                }
                if (mazeArray[sx][sy][1] === false && mazeArray[sx][sy][2] === false && mazeArray[sx][sy][3] === true) {
                  fill("orange");
                  //rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
                }
                if (mazeArray[sx][sy][1] === true && mazeArray[sx][sy][2] === true && mazeArray[sx][sy][3] === false) {
                  fill("pink");
                  //rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
                }
                if (mazeArray[sx][sy][1] === false && mazeArray[sx][sy][2] === true && mazeArray[sx][sy][3] === true) {
                  fill("red");
                  //rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
                }
                if (mazeArray[sx][sy][1] === true && mazeArray[sx][sy][2] === false && mazeArray[sx][sy][3] === true) {
                  fill("green");
                  //rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
                }
                if (mazeArray[sx][sy][1] === true && mazeArray[sx][sy][2] === true && mazeArray[sx][sy][3] === true) {
                  fill("brown");
                  //rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
                }
                rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
              }
          }
      }
  }
}
walls();
if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
  if (wanderer[0] != 0 && mazeArray[wanderer[0]-1][wanderer[1]][0] && mazeArray[wanderer[0]-1][wanderer[1]][1] === false){
    x -= (mazeSizeX/mazeX);
    //mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[0] -= 1;
  }
  if (wanderer[0] != 0 && mazeArray[wanderer[0]-1][wanderer[1]][1] && mazeArray[wanderer[0]-1][wanderer[1]][0]){
    x -= (mazeSizeX/mazeX);
    //mazeArray[wanderer[0]][wanderer[1]][1] = false
    wanderer[0] -= 1;
  }
}
if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
  if (wanderer[0] != mazeX-1 && mazeArray[wanderer[0]+1][wanderer[1]][0] && mazeArray[wanderer[0]+1][wanderer[1]][1] === false){
    x += (mazeSizeX/mazeX);
    //mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[0] += 1;
  }
  if (wanderer[0] != mazeX-1 && mazeArray[wanderer[0]+1][wanderer[1]][1] && mazeArray[wanderer[0]+1][wanderer[1]][0]){
    x += (mazeSizeX/mazeX);
    //mazeArray[wanderer[0]][wanderer[1]][1] = false
    wanderer[0] += 1;
  }
}
if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
  if (wanderer[1] != 0 && mazeArray[wanderer[0]][wanderer[1]-1][0] && mazeArray[wanderer[0]][wanderer[1]-1][1] === false){
    y -= (mazeSizeY/mazeY);
    //mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[1] -= 1;
  }
  if (wanderer[1] != 0 && mazeArray[wanderer[0]][wanderer[1]-1][1] && mazeArray[wanderer[0]][wanderer[1]-1][0]){
    y -= (mazeSizeY/mazeY);
    //mazeArray[wanderer[0]][wanderer[1]][1] = false
    wanderer[1] -= 1;
  }
}
if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
  if (wanderer[1] != mazeY-1 && mazeArray[wanderer[0]][wanderer[1]+1][0] && mazeArray[wanderer[0]][wanderer[1]+1][1] === false){
    y += (mazeSizeY/mazeY);
    [1] += 1;
  }
  if (wanderer[1] != mazeY-1 && mazeArray[wanderer[0]][wanderer[1]+1][1] && mazeArray[wanderer[0]][wanderer[1]+1][0]){
    y += (mazeSizeY/mazeY);
    //mazeArray[wanderer[0]][wanderer[1]][1] = false
    wanderer[1] += 1;
  }
}
if (players[myId].color === "blue") {
  mazeArray[wanderer[0]][wanderer[1]][1] = true
}
if (players[myId].color === "purple") {
  mazeArray[wanderer[0]][wanderer[1]][2] = true
}
if (players[myId].color === "orange") {
  mazeArray[wanderer[0]][wanderer[1]][3] = true
}
}
function mazeGame(){
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
              fill(players[myId].color);
              rect(sx*((mazeSizeX/mazeX)), sy*((mazeSizeY/mazeY)), (mazeSizeX/mazeX), (mazeSizeY/mazeY))
              }
          }
      }
  }
}
walls();
if (keyIsDown(LEFT_ARROW)) {
  if (wanderer[0] != 0 && mazeArray[wanderer[0]-1][wanderer[1]][0]){
    x -= (mazeSizeX/mazeX);
    mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[0] -= 1;
  }
}
if (keyIsDown(RIGHT_ARROW)) {
  if (wanderer[0] != mazeX-1 && mazeArray[wanderer[0]+1][wanderer[1]][0]){
    x += (mazeSizeX/mazeX);
    mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[0] += 1;
  }
}
if (keyIsDown(UP_ARROW)) {
  if (wanderer[1] != 0 && mazeArray[wanderer[0]][wanderer[1]-1][0]){
    y -= (mazeSizeY/mazeY);
    mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[1] -= 1;
  }
}
if (keyIsDown(DOWN_ARROW)) {
  if (wanderer[1] != mazeY-1 && mazeArray[wanderer[0]][wanderer[1]+1][0]){
    y += (mazeSizeY/mazeY);
    mazeArray[wanderer[0]][wanderer[1]][1] = true
    wanderer[1] += 1;
  }
}
}
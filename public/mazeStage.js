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
            rect(sx*(int(mazeSizeX/mazeX)), sy*(int(mazeSizeY/mazeY)), int(mazeSizeX/mazeX), int(mazeSizeY/mazeY))
            } else 
              {
              fill(players[myId].color);
              rect(sx*(int(mazeSizeX/mazeX)), sy*(int(mazeSizeY/mazeY)), int(mazeSizeX/mazeX), int(mazeSizeY/mazeY))
              }
          }
      }
  }
}
}
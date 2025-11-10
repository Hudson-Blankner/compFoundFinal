function mazeGame(){
    background(220)
    function walls()
{
  for (let sx = 0; sx < mazeX; sx += 1) 
  {
    for (let sy = 0; sy < mazeY; sy += 1) 
    {
      if (mazeArray[sx][sy][0])
        {
          if ((mazeArray[sx][sy][1]) === false)
            {
            noStroke()
            fill(255-255/(mazeX/sx),150-0/(mazeY/sy),255/(mazeX/sx))
            square(sx*(int(mazeSize/mazeX)), sy*(int(mazeSize/mazeY)), int(mazeSize/mazeX))
            } else 
              {
              fill(255/(mazeX/sx),0-0/(mazeY/sy),255-255/(mazeX/sx))
              square(sx*(int(mazeSize/mazeX)), sy*(int(mazeSize/mazeY)), int(mazeSize/mazeX))
              }
          }
      }
  }
}
}
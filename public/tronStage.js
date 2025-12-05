function tronGame(){
  if (gameIsOn){
  background('black');
  frameRate(90);
  trondirection = 'right'
  trongameOver = false

  if (players[myId].color === "blue") {
        x = 20
        y = 175
      } else if (players[myId].color === "purple") {
        x = 20
        y = 350
      } else if (players[myId].color === "orange") {
        x = 20
        y = 525
      }
  }
  gameIsOn = false;
  if (trongameOver  == true) {
    return
  } else {
    player();
  }
  function player(){
    if (notBlack(x,y) === true) {
      fill(225)
      text("Game Over\n You fuckin such :/", 200, 180)
      trongameOver = true
      fill(255,0,0)
      ellipse(x,y,20,20)
    }
    push();
    for (let id in players) {
      stroke(players[id].color);
      strokeWeight(3);
      point(players[id].x, players[id].y);
    }
    pop();
    if (trondirection === 'left'){
       x = x - 2
   }
   if (trondirection === 'up') {
      y = y - 2
   }
   if (trondirection === 'right') {
     x = x + 2
   }
   if (trondirection === 'down') {
     y = y + 2
   }
  }
   function notBlack(x,y) {
     var a = get(x, y);
     if (a[0] !== 0) return true;
     else if (a[1] !== 0) return true;
     else if (a[2] !== 0) return true;
     return false;
   }
}
  
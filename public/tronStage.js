function tronGame(){
  if (gameIsOn){
  r = false;
  background('black');
  frameRate(90);
  trondirection = 'right'
  trongameOver = false
  }
  gameIsOn = false;
  if (trongameOver  === true) {
    r = trongameOver
    fill(225)
    text("Game Over\n You heckin such :/", 700, 200)
    allDoneAgain = 0
    for (let id in players) {
      if (players[id].r === true){
        allDoneAgain += 1;
      }
    }
    if (allDoneAgain >= playerCount){
      if (keyIsDown(32)){
      titleSetup = true;
      trongameOver = false;
      stage = 1;
      }
    }
  } else {
    r = trongameOver
    player();
  }
  function player(){
    if (notBlack(x,y) === true) {
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
  allDone = 0;
  for (let id in players) {
    if (players[id].r === true){
      allDone += 1;
    }
  }
  for (let id in players) {
    if (allDone >= 1){
      if (players[id].r === false){
        mazeWinner = player[id].color
      }
      if (trongameOver === false){
        score += 1
        trongameOver = true;
      }
    }
  }
}
  
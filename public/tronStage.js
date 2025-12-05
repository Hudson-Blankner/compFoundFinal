function tronGame(){
  let x = 20
  let y = 200
  let direction = 'right'

  let gameOver = false

  function setup() {
    createCanvas(innerWidth, innerHeight);
    background('black');
    frameRate(90);
  }

  function draw() {
  if (gameOver == true) {
    return
   }
  player()
  }
  
  function player(){
    if (notBlack(x,y) === true) {
      fill(225)
      text("Game Over\n You fuckin such :/", 200, 180)
      gameOver = true
      fill(255,0,0)
      ellipse(x,y,20,20)
    }
    push();
    stroke('orange');
    strokeWeight(3);
    point(x, y);
    pop();
    if (direction === 'left'){
       x = x - 2
   }
   if (direction === 'up') {
      y = y - 2
   }
   if (direction === 'right') {
     x = x + 2
   }
   if (direction === 'down') {
     y = y + 2
   }
  }
  function keyPressed(){
   if (keyIsDown(LEFT_ARROW) === true) {
     if (direction !== 'right') {
      direction = 'left'
     }
   }
   if (keyIsDown(UP_ARROW) === true) {
     if (direction !== 'down') {
      direction = 'up'
     }
   }
   if (keyIsDown(RIGHT_ARROW) === true) {
     if (direction !== 'left') {
      direction = 'right'
     }
   }
   if (keyIsDown(DOWN_ARROW) === true) {
     if (direction !== 'up') {
      direction = 'down'
     }
   }
  }
   function notBlack(x,y) {
     var a = get(x, y);
     if (a[0] !== 0) return true;
     else if (a[1] !== 0) return true;
     else if (a[2] !== 0) return true;
     return false;
   }
  
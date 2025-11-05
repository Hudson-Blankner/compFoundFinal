function tronGame(){
    let x0 = 400;
let y0 = 400;

let trail = [];


function setup() {
  createCanvas(innerWidth, innerHeight);
  player1 = new Player(x0, y0, 20, 20);
}

function draw() {
  background('black');
  player1.draw();

  // Movin and Groovin
  player1.move();

  if (keyIsDown(UP_ARROW) === true) {
    if (player1.direction !== 'down') {
      player1.direction = 'up'
    }
  }
  if (keyIsDown(RIGHT_ARROW) === true) {
    if (player1.direction !== 'left') {
      player1.direction = 'right'
    }
  }
  if (keyIsDown(DOWN_ARROW) === true) {
    if (player1.direction !== 'up') {
      player1.direction = 'down'
    }
  }
  if (keyIsDown(LEFT_ARROW) === true) {
    if (player1.direction !== 'right') {
      player1.direction = 'left'
    }
  }

  // Line thingy
  push();
  stroke('orange');
  strokeWeight(4);
  line(x0 + (player1.w / 2), y0 + (player1.h / 2), player1.x + (player1.w / 2), player1.y + (player1.h / 2));
  pop();
}

function keyPressed() {

}

class Player{
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.direction = 'up'
    this.alive = true
  }
  
  draw() {
    fill('white');
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    if (this.direction === 'up') {
      this.y -= 3;
    } else if (this.direction === 'right') {
      this.x += 3;
    } else if (this.direction === 'down') {
      this.y += 3;
    } else if (this.direction === 'left') {
      this.x -= 3;
    } else {
      this.direction = 'up';
    }
  }
}
}
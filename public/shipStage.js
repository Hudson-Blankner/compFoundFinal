function spaceShipGame(){
      background('brown');
      fill(255)
  let t = frameCount/60;
  function snowflake(){

  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50,0);
  this.initialangle = random(0,2*PI);
  this.size = random(2,5);
  
  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width/2,2)));

  this.update = function(time)
  {

    // x position follows a circle
    let w = 0.6; // angular speed (larger = spins faster)
    let angle = w*time + this.initialangle;
		this.posX = 1400/2 + this.radius*sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size,0.5);
    
    // delete snowflake if past end of screen
    if(this.posY > 700)
    {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index,1);
    }

  };

  this.display = function(){
    ellipse(this.posX,this.posY,this.size);
  };
}
  // create a random number of snowflakes each frame
  for(var i=0; i<random(5); i++)
  {
    snowflakes.push(new snowflake()); // adds new snowflake object to array
  }
  
  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes)
  {
		flake.update(t); // update snowflake position
    flake.display();// draw snowflake
	}
}
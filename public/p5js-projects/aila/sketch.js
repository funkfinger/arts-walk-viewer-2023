
let x = 10; 
let y = 30;
let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(400, 400);
  fill(240);
  noStroke();
}


function draw() {
  

  
  background('rgb(216,213,213)');
  let t = frameCount / 60; // update time
  circle(200,500,500)

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
  
 fill('rgb(195,116,67)')
rect(120,200, 160,60)
        fill('rgb(165,84,42)')
   quad(150, 150, 100, 210, 300, 210, 250, 150)
  fill('rgb(170,168,168)')
  
  ellipse(200, 270, y, x )
  ellipse(200, 290, y + 5, x +5)
  ellipse(200, 320, y + 10, x + 10)
  ellipse(200, 360, y + 15, x + 15)
  
  fill('rgb(165,84,42)')
  rect(180, 215, 40, 45)
 
  fill('rgb(253,253,95)')
  circle(210, 240, 10)

  fill('white')
  square(235, 220, 30)
  square( 135, 220, 30)
fill('white')
  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

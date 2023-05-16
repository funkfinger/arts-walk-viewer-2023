let fish = [];

function setup() {
  createCanvas(500, 500);
  colorMode (HSB, 100);
  for (let i = 0; i < 15; i++) {
    fish.push(new Fish(random (width), random (height)));
  }
}
function draw() {
  background("#3FBEF6");
  for (let i = 0; i < fish.length; i++) {
    fish[i].draw();
    fish[i].move();
  }
}

class Fish {
  constructor(x, y,c) {
    this.x = x;
    this.y = y;
    this.c = color (random (150, 250), random (30, 50), 100);
    this.s = random (0.2, 1.6)
  }
  draw() {
    push();
    let s = this.s;
    fill (this.c);
    translate(this.x, this.y);
    triangle(0 * s, 0 * s, 70 * s, -20 * s, 70 * s, 15 * s);
    triangle(0 * s, -20 * s, 20 * s, -35 * s, 20 * s, -20 * s);
    triangle(-10 * s, -20 * s, 10 * s, -30 * s, 10 * s, -20 * s);
    triangle(-10 * s, 20 * s, 10 * s, 20 * s, 10 * s, 30 * s);
    triangle(3 * s, 20 * s, 23 * s, 20 * s, 23 * s, 33 * s);
    ellipse(0 * s, 0 * s, 80 * s, 45 * s);
    circle(-23 * s, -5 * s, 5 * s);
    pop();
  }
  move () {
    this.x = this.x - 3;
    if (this.x < -80 * this.s) {
      this.x = width+50 * this.s;
    }
  }
  
}

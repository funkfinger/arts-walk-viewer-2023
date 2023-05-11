let Sand;
let Ocean;
let noiseY = 0.0;
let Sun;
let x = 100;
let y = 100;
//let r = 10;
let w;
const wArray = [];
let cloudx = 100;
let cloudy = 100;
let fish = [];

function setup() {
  createCanvas(1000, 900);

  for (let x = 0; x < 10; x++) {
    wArray.push(new Bubble(random(width), random(height), random(10, 20)));
  }
  if (Bubble < height + 2) {
      bubble = 0;
    }

}

function draw() {
  background("skyblue");
  ocean();
  sand();

  for (let x = 0; x < wArray.length; x++) {
    wArray[x].update();
    wArray[x].draw();

    makeCloud(cloudx, cloudy - 0.1);
    makeCloud(cloudx + 200, cloudy + 80);
    fill(220);
    noStroke();
    cloudx += 0.2;
    if (cloudx > width + 8) {
      cloudx = 0;
    }
    sun();
  }
  for (let f = 0; f < fish.length; f++) {
    fish[f].draw();
    fish[f].move();
  }
  
}
function mousePressed() {
    let c = color(random(220,255), random(220, 255), random(220, 255));
  fish.push(new Fish(mouseX, mouseY, c));
 
}
class Bubble {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.y = this.y - 1;
    stroke("skyblue");
    noFill();

    this.color = "skyblue";
  }

  moveUp() {
    this.x = this.x + random(1, -2);
    this.y = this.y - random(0.2, 2);
    if (this.y < 0) {
      this.y = 600;
    }
  }
  update() {
    this.moveUp();
  }

  draw() {
    stroke(this.color);
    noFill();
    circle(this.x, this.y, this.d);
  }
}

function sand() {
  fill(250, 180, 100, 95);
  noStroke();
  square(0, 800, 1000, 5, 5);
}

function ocean() {
  fill(67, 157, 171);
  beginShape();
  let noiseX = 0;
  for (let x = 0; x <= width; x += 8) {
    let y = map(noise(noiseX, noiseY), 0, 1, 300, 400);
    vertex(x, y);
    noiseX += 0.05;
  }
  noiseY += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function sun() {
  fill(355, 810, 20);
  ellipse(0, 0, 270);
}

function makeCloud(cloudx, cloudy) {
  fill(250);
  noStroke();
  ellipse(cloudx, cloudy, 84, 75);
  ellipse(cloudx + 50, cloudy + 13, 80, 60);
  ellipse(cloudx - 40, cloudy + 13, 80, 60);
}

class Fish {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.s = random(0.4, 0.9);
    this.c = c;
  }

  draw() {
    push();
    let s = this.s;
    fill(this.c);
    translate(this.x, this.y);
    //rotate(PI);
    triangle(0 * s, 0 * s, 70 * s, -20 * s, 70 * s, 15 * s);
   triangle(-10 * s, -10 * s, 10 * s, -30 * s, 10 * s, -20 * s);
  triangle(-6 * s, 19 * s, 7 * s, 2 * s, 15 * s, 30 * s);
    ellipse(0 * s, 0 * s, 80 * s, 45 * s);
  fill(33, 33, 33);
    circle(2 * s, 8.3 * s, 3.5);
    pop();
    
  }
  move() {
    this.x += random(-2.9, 0.00001);
    this.y += random(-0.3, 0.5); {
    
    }
  }
}


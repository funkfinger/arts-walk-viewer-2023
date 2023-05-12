let pg;
var img;
let d = 200; // Width of the shape
let xpos = 100; // Starting position of shape
let ypos = 100;
let xpos2 = 400; // Starting position of shape
let ypos2 = 400;

let xspeed = 3; // Speed of the shape
let yspeed = 2.8; // Speed of the shape
let xspeed2 = 4; // Speed of the shape
let yspeed2 = 2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

let xdirection2 = 2; // Left or Right
let ydirection2 = 2; // Top to Bottom

function setup() {
  createCanvas(800, 800);
  noStroke();
  pg = createGraphics(d, d);
}

function preload() {
  img = loadImage("bron.png");
  imgbrooks = loadImage("brooks.png");
}

function draw() {
  background(200, 200, 200);
  colorMode(HSB);
  // circle(xpos, ypos, d);
  image(img, xpos, ypos);
  image(imgbrooks, xpos2, ypos2);
  if (mouseIsPressed) fill(random(255), random(255), random(255));
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
   xpos2 = xpos2 + xspeed2 * xdirection2;
  ypos2 = ypos2 + yspeed2 * ydirection2;
  

  if (xpos > width - d/2 || xpos < 0) {
    xdirection *= -1;
  }
  if (ypos > height - d/2 || ypos < 0) {
    ydirection *= -1;
  }
  
  if (xpos2 > width - d/2 || xpos2 < 0) {
    xdirection2 *= -1;
  }
  if (ypos2 > height - d/2 || ypos2 < 0) {
    ydirection2 *= -1;
  }
}

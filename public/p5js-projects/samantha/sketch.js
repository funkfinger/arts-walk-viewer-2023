function setup() {
  createCanvas(500, 500);
  
}

// let h = console.log (new Date ().getHours () );
// let m = console.log (new Date ().getMinutes () );
// let r = rotate;

function draw() {
  let h = new Date().getHours();
  if (h > 12) h = h - 12;
  let hourAngle = map(h, 0, 12, 0 - PI / 2, PI * 2 - PI / 2);
  let m = new Date ().getMinutes() + 15;
  // let m = 15
  let minuteAngle = map (m, 0, 60, 0 - PI / 2, PI * 2 - PI / 2);
  background(220);
  // noFill ();
  strokeWeight (5);
  circle (250, 250, 475);
  circle (250, 250, 5);
  textSize (30);
  text ('12', 240, 60);
  textSize (30);
  text ('1', 345, 90);
  textSize (30);
  text ('2', 405, 170);
  textSize (30);
  text ('3', 430, 260);
  textSize (30);
  text ('4', 410, 350);
  textSize (30);
  text ('5', 345, 415);
  textSize (30);
  text ('6', 245, 450);
  textSize (30);
  text ('7', 150, 420);
  textSize (30);
  text ('8', 80, 350);
  textSize (30);
  text ('9', 40, 260)
  textSize (30);
  text ('10', 60, 160);
  textSize (30);
  text ('11', 140, 90);
  strokeWeight (3);
  push ();
  translate (250, 250);
  // r += 0.000001;
  rotate (hourAngle);
  line (0, 0, 100, 0);
  pop ();
  push ();
  translate (250, 250);
  // r += 0.0001;
  rotate (minuteAngle);
  line (0, 0, 0, -200);
  pop ();
}
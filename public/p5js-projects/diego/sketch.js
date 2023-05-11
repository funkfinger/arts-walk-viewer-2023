function setup() {
  createCanvas(900, 800, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(20);

  rotateX(90);
    rotateX(frameCount * 0.05)
 rotateY(frameCount * 0.05)
  rotateZ(frameCount * 0.05)

  noFill();
  stroke(255);

  for (var i = 0; i < 20; i++) {
    var r = map(sin(frameCount / 2), -1, 1, 100, 255);
    var g = map(i, 0, 50, 100, 200);
    var b = map(cos(frameCount), -1, 1, 200, 100);

    stroke(r, g, b);
    
    rotate(frameCount / 50)

    beginShape();
    for (var j = 0; j < 360; j += 10) {
      var rad = i * 20;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 15) * 100;

      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
  
}

const cellSize = 40;
const flowField = [];
const flowParticles = [];

function setup() {
  createCanvas(800, 600);
  // create flow field
  for (let y = 0; y < height; y += cellSize) {
    for (let x = 0; x < width; x += cellSize) {
      // make object and push into flowField array
      flowField.push(new FlowCell(x, y));
    }
  }
  for (let i = 0; i < 100; i++) {
    flowParticles.push(new FlowParticle(random(width), random(height)));
  }
  background(0, 0, 0);
  // frameRate(5)
}

function draw() {
  // document.getElementById("frame_rate").innerHTML = "framerate = " + frameRate();
  background(0, 0, 0, 10);
  // loop through our flow field array...
  for (let i = 0; i < flowField.length; i++) {
    let fc = flowField[i];
    fc.update();
    fc.influenceParticle(flowParticles);
    // fc.draw();
  }
  for (let j = 0; j < flowParticles.length; j++) {
    flowParticles[j].update();
    flowParticles[j].draw();
  }
}

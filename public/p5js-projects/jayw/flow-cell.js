// flow field cell object
class FlowCell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.noiseChange = 0.001;
    this.noiseValue = 0;
    this.directionVector = createVector(x + cellSize / 2, y + cellSize / 2);
    this.vectorAngle = 0;
    this.w = cellSize;
    this.vectorStrength = 0.1;
  }

  // just so we can see it
  draw() {
    fill(255 * this.noiseValue);
    noStroke();
    square(this.x, this.y, cellSize);
    push();
    translate(this.x + cellSize / 2, this.y + cellSize / 2);
    stroke(255);
    line(0, 0, this.directionVector.x, this.directionVector.y);
    pop();
  }

  // we will update the object here!
  update() {
    this.noiseValue = noise(this.x * 0.01, this.y * 0.01, this.noiseChange);
    this.noiseChange += 0.01;
    this.vectorAngle = this.noiseValue * TWO_PI * 2;
    this.directionVector.setHeading(this.vectorAngle);
    this.directionVector.limit(cellSize / 2);
  }

  influenceParticle(particles) {
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      if (p.x >= this.x && p.x <= this.x + this.w) {
        if (p.y >= this.y && p.y < this.y + this.w) {
          let returnV = this.directionVector.copy();
          // p.setInfluenceVector(returnV.mult(this.noiseValue/2));
          p.setInfluenceVector(returnV.mult(this.vectorStrength));
        }
      }
    }
  }
}

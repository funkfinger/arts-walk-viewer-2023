class FlowParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v = createVector(x, y);
    this.influenceVector = createVector(0,0);
  }

  draw() {
    fill("white");
    noStroke();
    circle(this.v.x, this.v.y, 4);
  }

  setInfluenceVector(v) {
    this.influenceVector = v;
  }
  
  update() {
    this.v.add(this.influenceVector);
    if(this.v.x > width) {
      this.v.x = 0;
    }
    if(this.v.y > height) {
      this.v.y = 0;
    }
    if(this.v.x < 0) {
      this.v.x = width;
    }
    if(this.v.y < 0) {
      this.v.y = height;
    }
  }
}

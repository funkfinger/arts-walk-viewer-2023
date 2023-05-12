function setup() {
  createCanvas(400, 400);
  background("red")
  noStroke()
  rect(10,0, 20, 1000)
  rect(60,0, 20, 1000)
  
  rect(120,0, 20, 1000)
  
  rect(180,0, 20, 1000)
  
  rect(240,0, 20, 1000)
  
  rect(300,0, 20, 1000)
  
  rect(360,0, 20, 1000)
  
  rect(0,10, 1000, 20)
  rect(0,60, 1000, 20)
  rect(0,120, 1000, 20)
  rect(0,180, 1000, 20)
  rect(0,240, 1000, 20)
  rect(0,300, 1000, 20)
  rect(0,360, 1000, 20)
  stroke(2);
  ellipse(100, 100, 200, 200)
  ellipse(100,100,180, 180)
    ellipse(300, 300, 200, 200)
  ellipse(300,300,180, 180)
    ellipse(300, 100, 200, 200)
  ellipse(300,100,180, 180)
    ellipse(100, 300, 200, 200)
  ellipse(100,300,180, 180)

}


   

function mousePressed() {

  fill("white");
  ellipse(mouseX, mouseY, 100, 80);
 
  fill("yellow");
  ellipse(mouseX, mouseY, 30,30);
  
}

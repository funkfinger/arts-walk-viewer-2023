let path = [];
x = 180;
function setup() {
  createCanvas(1000, 1000);
  
}



function draw() {
 background('beige');
   for(let i=0; i < path.length; i++){
    path [i].draw(); 
   }
   // pallet
 stroke('rgb(251,204,137)')
  fill('white')
 ellipse(900,100,200,200)
  fill('purple')
  ellipse(830, 110, 30,30)
  fill('yellow')
   ellipse(843, 70, 30,30)
  fill('red')
   ellipse(870, 40, 30,30)
  fill('blue')
   ellipse(910, 38, 30,30)
   fill('beige')
  ellipse(900,140, 100,50)
 // roller
 fill('white')
  rectMode(CENTER);
noStroke();
  rect(mouseX, mouseY , x,90);
 fill('white')
  stroke('black');
  ellipse(3000, 100, 80, 100)
  // paint
  noStroke();
  fill('red')

    rect(mouseX , mouseY +20, 180, 50)
  // handle
  noStroke();
  fill('white')
  rect(mouseX + 95, mouseY + 1, 10,30)
  rect(mouseX + 115, mouseY + 1, 30,10)
  rect(mouseX + 125, mouseY +42, 10, 90)
  rect(mouseX +60, mouseY + 82, 130, 10 )
  rect(mouseX , mouseY + 195, 10, 220)

  stroke('rgb(251,204,137)');
rect(600, 950, 1500, 300)
   
  
}

function mouseDragged() {
  path.push(new Path(mouseX, mouseY));
}

class Path{
  constructor(x, y) {
  this.x = x;
  this.y = y;
  this.pathColor = ('red');

}
  draw () {
    noStroke();
    fill('rgb(255,64,64)')
    rect(this.x, this.y, 180);

   
  }
}

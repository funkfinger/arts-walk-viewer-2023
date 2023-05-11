let squareArray = [];
let end = [];
let turn = 1;

let gamestatus = "none";

let CanvasW = 600;
let sqWidth = CanvasW / 9;

function setup() {
  createCanvas(CanvasW, CanvasW);
  background(200, 150, 100);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let centerX = width / 2;
      let centerY = height / 2;
      squareArray.push(
        new Space(
          i * sqWidth + centerX - 1.5 * sqWidth,
          j * sqWidth + centerY - 1.5 * sqWidth,
          "empty"
        )
      );
    }
  }
}

function draw() {
  textSize(CanvasW / 8);
  textAlign(CENTER);
  text("TIC TAC TOE", CanvasW / 2, CanvasW / 8);

  strokeWeight(CanvasW / 100);

  for (let i = 0; i < squareArray.length; i++) {
    squareArray[i].draw();
  }
}

class Space {
  constructor(StartX, StartY, type) {
    this.startX = StartX;
    this.startY = StartY;
    this.type = type;
  }
  draw() {
    if (gamestatus == "none") {
      square(this.startX, this.startY, CanvasW / 9);
      if (this.type == "o") {
        ellipse(
          this.startX + CanvasW / 9 / 2,
          this.startY + CanvasW / 9 / 2,
          CanvasW / 16,
          CanvasW / 16
        );
        //fill(255, 0, 0)
      }
      if (this.type == "x") {
        square(
          this.startX + CanvasW / 9 / 4.5,
          this.startY + CanvasW / 9 / 4.5,
          CanvasW / 16
        );
        //fill(0, 0, 0)
      }
    }
  }
  isTheMouseOnMe() {
    let onMe = false;
    if (mouseX >= this.startX) {
      if (mouseX <= this.startX + sqWidth) {
        if (mouseY >= this.startY) {
          if (mouseY <= this.startY + sqWidth) {
            onMe = true;
          }
        }
      }
    }
    return onMe;
  }
  playerturn() {
    if (turn >= 1) {
      if (this.type == "empty") {
        this.type = "x";
        //fill(0, 0, 255)
        turn = 0;
        squareArray[0].gamecheckersquare();
      }
    }
    if (turn == 0) {
      if (this.type == "empty") {
        this.type = "o";
        //fill(255, 0, 0)
        ellipse(
          this.startX + CanvasW / 9 / 2,
          this.startY + CanvasW / 9 / 2,
          CanvasW / 16,
          CanvasW / 16
        );
        turn = 1;
        squareArray[0].gamecheckercircle();
      }
    }
  }
  gamecheckercircle() {
    if (
      (squareArray[0].type == "o" &&
        squareArray[1].type == "o" &&
        squareArray[2].type == "o") ||
      (squareArray[0].type == "o" &&
        squareArray[3].type == "o" &&
        squareArray[6].type == "o") ||
      (squareArray[0].type == "o" &&
        squareArray[4].type == "o" &&
        squareArray[8].type == "o") ||
      (squareArray[1].type == "o" &&
        squareArray[4].type == "o" &&
        squareArray[7].type == "o") ||
      (squareArray[2].type == "o" &&
        squareArray[5].type == "o" &&
        squareArray[8].type == "o") ||
      (squareArray[3].type == "o" &&
        squareArray[4].type == "o" &&
        squareArray[5].type == "o") ||
      (squareArray[6].type == "o" &&
        squareArray[7].type == "o" &&
        squareArray[8].type == "o") ||
      (squareArray[2].type == "o" &&
        squareArray[4].type == "o" &&
        squareArray[6].type == "o")
    ) {
      squareArray[1].gameendcircle();
      gamestatus = "circle";
    }
  }

  gamecheckersquare() {
    if (
      (squareArray[0].type == "x" &&
        squareArray[1].type == "x" &&
        squareArray[2].type == "x") ||
      (squareArray[0].type == "x" &&
        squareArray[3].type == "x" &&
        squareArray[6].type == "x") ||
      (squareArray[0].type == "x" &&
        squareArray[4].type == "x" &&
        squareArray[8].type == "x") ||
      (squareArray[1].type == "x" &&
        squareArray[4].type == "x" &&
        squareArray[7].type == "x") ||
      (squareArray[2].type == "x" &&
        squareArray[5].type == "x" &&
        squareArray[8].type == "x") ||
      (squareArray[3].type == "x" &&
        squareArray[4].type == "x" &&
        squareArray[5].type == "x") ||
      (squareArray[6].type == "x" &&
        squareArray[7].type == "x" &&
        squareArray[8].type == "x") ||
      (squareArray[2].type == "x" &&
        squareArray[4].type == "x" &&
        squareArray[6].type == "x")
    ) {
      squareArray[1].gameendsquare();
      gamestatus = "square";
    }
  }
  gameendcircle() {
    fill(200, 150, 100);
    stroke(0);
    strokeWeight(10);
    rect(0, 0, CanvasW, CanvasW);
    fill(255);
    strokeWeight(5);
    textSize(CanvasW / 20);
    text("CIRCLES's WON THIS ROUND!", CanvasW / 2, CanvasW / 2);
    strokeWeight(10);
    fill(255, 255, 255);
    gamestatus = "circles";
    strokeWeight(5);
    rect(
      CanvasW / 2 - CanvasW / 8,
      CanvasW / 2 + CanvasW / 20,
      CanvasW / 4,
      CanvasW / 10
    );
    textSize(20);
    text("RESTART", CanvasW / 2, CanvasW / 2 + CanvasW / 9.5);
  }
  gameendsquare() {
    fill(200, 150, 100);
    stroke(0);
    strokeWeight(10);
    rect(0, 0, CanvasW, CanvasW);
    fill(255);
    strokeWeight(5);
    textSize(CanvasW / 20);
    text("SQUARES's WON THIS ROUND!", CanvasW / 2, CanvasW / 2);
    strokeWeight(10);
    fill(255, 255, 255);
    console.log("circles win");

    strokeWeight(5);
    rect(
      CanvasW / 2 - CanvasW / 8,
      CanvasW / 2 + CanvasW / 20,
      CanvasW / 4,
      CanvasW / 10
    );
    textSize(20);
    text("RESTART", CanvasW / 2, CanvasW / 2 + CanvasW / 9.5);
  }
}

function Restart() {
  squareArray = [];
  turn = 1;
  gamestatus = "none";

  sqWidth = CanvasW / 9;

  createCanvas(CanvasW, CanvasW);
  background(200, 150, 100);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      centerX = width / 2;
      centerY = height / 2;
      squareArray.push(
        new Space(
          i * sqWidth + centerX - 1.5 * sqWidth,
          j * sqWidth + centerY - 1.5 * sqWidth,
          "empty"
        )
      );
    }
  }
}

function mouseClicked() {
  if (gamestatus == "none") {
    for (i = 0; i < squareArray.length; i++) {
      if (squareArray[i].isTheMouseOnMe()) {
        //console.log(squareArray[i].this.type)
        squareArray[i].playerturn();
      }
    }
  } else {
    if (
      mouseY >= CanvasW / 2 + CanvasW / 20 &&
      mouseY < CanvasW / 2 + CanvasW / 20 + CanvasW / 10
    ) {
      if (
        mouseX >= CanvasW / 2 - CanvasW / 8 &&
        mouseX < CanvasW / 2 - CanvasW / 8 + CanvasW / 4
      ) {
        Restart();
      }
    }
  }
}

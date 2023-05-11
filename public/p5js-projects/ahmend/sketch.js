let snakeX = [];
let snakeY = [];
let snakeLength = 1;
let foodX, foodY;
let gridSize = 20;
let direction = "RIGHT";
let fr = 13;

function setup() {
  createCanvas(800, 800);
  snakeX.push(gridSize);
  snakeY.push(gridSize);
  foodLocation();
}

function draw() {
  background(0);
  moveSnake();
  checkCollision();
  drawSnake();
  drawFood();
  frameRate(fr);
}

function foodLocation() {
  //random position for the food
  foodX = floor(random(width / gridSize)) * gridSize;
  foodY = floor(random(height / gridSize)) * gridSize;
}

function moveSnake() {
  let headX = snakeX[0];
  let headY = snakeY[0];

  //update the head position based on the current direction
  if (direction == "RIGHT") {
    headX += gridSize;
  }
  if (direction == "LEFT") {
    headX -= gridSize;
  }
  if (direction == "UP") {
    headY -= gridSize;
  }
  if (direction == "DOWN") {
    headY += gridSize;
  }

  //add the new head position to the beginning of the snake arrays
  snakeX.unshift(headX);
  snakeY.unshift(headY);

  //remove the last element(s) from the snake arrays if they exceed the snake length
  while (snakeX.length > snakeLength) {
    snakeX.pop();
    snakeY.pop();
  }
}

function keyPressed() {
  //update the direction based on arrow key input, preventing the snake from going backwards
  if (keyCode === LEFT_ARROW && direction !== "RIGHT") {
    direction = "LEFT";
  }
  if (keyCode === RIGHT_ARROW && direction !== "LEFT") {
    direction = "RIGHT";
  }
  if (keyCode === UP_ARROW && direction !== "DOWN") {
    direction = "UP";
  }
  if (keyCode === DOWN_ARROW && direction !== "UP") {
    direction = "DOWN";
  }
}

function drawSnake() {
  fill(0, 255, 0);
  //draw each segment of the snake at its respective position
  for (let i = 0; i < snakeLength; i++) {
    square(snakeX[i], snakeY[i], gridSize);
  }
}

function drawFood() {
  fill(255, 0, 0);
  //draw the food at its certain position
  rect(foodX, foodY, gridSize, gridSize);
}

function checkCollision() {
  let headX = snakeX[0];
  let headY = snakeY[0];

  //check if the snake has collided with the food, if it does, increase its length and change the food
  if (headX == foodX && headY == foodY) {
    snakeLength++;
    if (fr < 30) {
      fr++;
    }
    foodLocation();
  }

  //check if the snake has collided with the wall
  if (headX < 0 || headX >= width || headY < 0 || headY >= height) {
    gameOver();
  }

  //check if the snake has hit itself
  for (let i = 1; i < snakeLength; i++) {
    if (headX == snakeX[i] && headY == snakeY[i]) {
      gameOver();
    }
  }
}

function gameOver() {
  //reset the game
  snakeX = [gridSize];
  snakeY = [gridSize];
  snakeLength = 1;
  direction = "RIGHT";
  foodLocation();
  fr = 13;
}

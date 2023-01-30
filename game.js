import {
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  SNAKE_SPEED
} from "./snake.js";

import {
  update as updateFood,
  draw as drawFood
}
from "./food.js";

import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost.\nDo you want to play again?")) {
      window.location.reload();
    }
    return
  }
  window.requestAnimationFrame(main);
  const secoundsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secoundsSinceLastRender < 1 / SNAKE_SPEED) return


  lastRenderTime = currentTime;
  update();
  draw();
  checkForDeath();
}


window.requestAnimationFrame(main);


function update() {
  updateSnake();
  updateFood();

}

function draw() {
  gameBoard.innerText = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkForDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
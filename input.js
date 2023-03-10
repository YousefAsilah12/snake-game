const gameContainer = document.querySelector('#game-board');

let inputDirection = {
  x: 0,
  y: 0
};
let lastInputDirection = {
  x: 0,
  y: 0
};
let startX, startY;

gameContainer.addEventListener('touchstart', handleTouchStart);
gameContainer.addEventListener('touchmove', handleTouchMove);
window.document.addEventListener('keydown', handleKeyDown);

function handleTouchStart(event) {
  event.preventDefault();
  const touch = event.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;
}

function handleTouchMove(event) {
  event.preventDefault();
  const touch = event.touches[0];
  const touchX = touch.clientX;
  const touchY = touch.clientY;
  const diffX = touchX - startX;
  const diffY = touchY - startY;
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      if (lastInputDirection.x !== 0) return;
      inputDirection = {x: 1, y: 0};
    } else {
      if (lastInputDirection.x !== 0) return;
      inputDirection = {x: -1, y: 0};
    }
  } else {
    if (diffY > 0) {
      if (lastInputDirection.y !== 0) return;
      inputDirection = {x: 0, y: 1};
    } else {
      if (lastInputDirection.y !== 0) return;
      inputDirection = {x: 0, y: -1};
    }
  }
}

function handleKeyDown(e) {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) return;
      inputDirection = {x:0, y: -1};
      break;
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) return;
      inputDirection= {x:0, y: 1};
      break;
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) return;
      inputDirection= {x:-1, y: 0};
      break;
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) return;
      inputDirection= {x:1, y: 0};
      break;
  }
}

export function getIputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}

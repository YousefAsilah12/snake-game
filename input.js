const gameContainer = document.querySelector('#game-board');

let inputDirection = {
  x: 0,
  y: 0
};
let lastInputDirection = {
  x: 0,
  y: 0
};

gameContainer.addEventListener('touchstart', handleTouchStart);
gameContainer.addEventListener('touchmove', handleTouchMove);

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
    // Horizontal swipe
    if (diffX > 0) {
      // Move right
      if (lastInputDirection.x !== 0) return;
      inputDirection = {
        x: 1,
        y: 0
      };
    } else {
      // Move left
      if (lastInputDirection.x !== 0) return;
      inputDirection = {
        x: -1,
        y: 0
      };
    }
  } else {
    // Vertical swipe
    if (diffY > 0) {
      // Move down
      if (lastInputDirection.y !== 0) return;
      inputDirection = {
        x: 0,
        y: 1
      };
    } else {
      // Move up
      if (lastInputDirection.y !== 0)return;
      inputDirection = {
        x: 0,
        y: -1
      };
    }
  }
}

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
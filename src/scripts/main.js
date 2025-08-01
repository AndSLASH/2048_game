'use strict';

/* global Game */

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();

  const gameField = document.querySelector('.game-field');
  const gameScore = document.querySelector('.game-score');
  const gameButton = document.querySelector('.button.start');
  const messageLose = document.querySelector('.message-lose');
  const messageWin = document.querySelector('.message-win');
  const messageStart = document.querySelector('.message-start');

  function updateField() {
    const state = game.getState();
    const rows = gameField.querySelectorAll('.field-row');

    for (let i = 0; i < 4; i++) {
      const cells = rows[i].querySelectorAll('.field-cell');

      for (let j = 0; j < 4; j++) {
        const value = state[i][j];

        cells[j].textContent = value === 0 ? '' : value;

        cells[j].className =
          value === 0 ? 'field-cell' : `field-cell field-cell--${value}`;
      }
    }
  }

  function updateScore() {
    gameScore.textContent = game.getScore();
  }

  function updateButton() {
    if (game.getStatus() === 'idle') {
      gameButton.textContent = 'Start';
      gameButton.className = 'button start';
    } else {
      gameButton.textContent = 'Restart';
      gameButton.className = 'button restart';
    }
  }

  function updateMessages() {
    const gameStatus = game.getStatus();

    messageLose.classList.add('hidden');
    messageWin.classList.add('hidden');
    messageStart.classList.add('hidden');

    if (gameStatus === 'idle') {
      messageStart.classList.remove('hidden');
    } else if (gameStatus === 'lose') {
      messageLose.classList.remove('hidden');
    } else if (gameStatus === 'win') {
      messageWin.classList.remove('hidden');
    }
  }

  gameButton.addEventListener('click', () => {
    if (game.getStatus() === 'idle') {
      game.start();
    } else {
      game.restart();
    }

    updateField();
    updateScore();
    updateButton();
    updateMessages();
  });

  document.addEventListener('keydown', (event) => {
    if (game.getStatus() !== 'playing') {
      return;
    }

    switch (event.key) {
      case 'ArrowLeft':
        game.moveLeft();
        break;
      case 'ArrowRight':
        game.moveRight();
        break;
      case 'ArrowUp':
        game.moveUp();
        break;
      case 'ArrowDown':
        game.moveDown();
        break;
      default:
        return;
    }

    updateField();
    updateScore();
    updateButton();
    updateMessages();
  });

  let startX = 0;
  let startY = 0;

  function updateUI() {
    updateField();
    updateScore();
    updateButton();
    updateMessages();
  }

  document.addEventListener('touchstart', (event) => {
    if (event.target.closest('.game-field')) {
      event.preventDefault();
    }

    const touch = event.touches[0];

    startX = touch.clientX;
    startY = touch.clientY;
  });

  document.addEventListener('touchmove', (event) => {
    if (event.target.closest('.game-field')) {
      event.preventDefault();
    }
  });

  document.addEventListener('touchend', (event) => {
    if (event.target.closest('.game-field')) {
      event.preventDefault();
    }

    if (!startX || !startY || game.getStatus() !== 'playing') {
      return;
    }

    const touch = event.changedTouches[0];
    const diffX = touch.clientX - startX;
    const diffY = touch.clientY - startY;

    if (Math.abs(diffX) < 30 && Math.abs(diffY) < 30) {
      return;
    }

    if (Math.abs(diffX) > Math.abs(diffY)) {
      diffX > 0 ? game.moveRight() : game.moveLeft();
    } else {
      diffY > 0 ? game.moveDown() : game.moveUp();
    }

    updateUI();
    startX = 0;
    startY = 0;
  });

  updateField();
  updateScore();
  updateButton();
  updateMessages();
});

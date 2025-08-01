'use strict';

class Game {
  constructor(initialState) {
    this.initialState = initialState || [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.state = this.initialState.map((row) => [...row]);
    this.score = 0;
    this.status = 'idle';
  }

  moveLeft() {
    const previousState = this.getState();

    for (let i = 0; i < this.state.length; i++) {
      const row = this.state[i];
      const filtered = row.filter((cell) => cell !== 0);

      const merged = [];

      for (let j = 0; j < filtered.length; j++) {
        if (filtered[j] === filtered[j + 1]) {
          const mergedValue = filtered[j] * 2;

          merged.push(mergedValue);
          this.score += mergedValue;
          j++;
        } else {
          merged.push(filtered[j]);
        }
      }

      const final = [...merged];

      while (final.length < 4) {
        final.push(0);
      }

      this.state[i] = final;
    }

    if (this.hasStateChanged(previousState)) {
      this.addRandomCell();
      this.updateStatus();
    }
  }

  moveRight() {
    const previousState = this.getState();

    for (let i = 0; i < this.state.length; i++) {
      const row = this.state[i];
      const filtered = row.filter((cell) => cell !== 0);

      const merged = [];

      for (let j = filtered.length - 1; j >= 0; j--) {
        if (filtered[j] === filtered[j - 1]) {
          const mergedValue = filtered[j] * 2;

          merged.push(mergedValue);
          this.score += mergedValue;
          j--;
        } else {
          merged.push(filtered[j]);
        }
      }

      merged.reverse();

      const final = [...merged];

      while (final.length < 4) {
        final.unshift(0);
      }

      this.state[i] = final;
    }

    if (this.hasStateChanged(previousState)) {
      this.addRandomCell();
      this.updateStatus();
    }
  }

  moveUp() {
    const previousState = this.getState();

    for (let j = 0; j < 4; j++) {
      const column = this.state.map((row) => row[j]);
      const filtered = column.filter((cell) => cell !== 0);

      const merged = [];

      for (let k = 0; k < filtered.length; k++) {
        if (filtered[k] === filtered[k + 1]) {
          const mergedValue = filtered[k] * 2;

          merged.push(mergedValue);
          this.score += mergedValue;
          k++;
        } else {
          merged.push(filtered[k]);
        }
      }

      const final = [...merged];

      while (final.length < 4) {
        final.push(0);
      }

      for (let i = 0; i < 4; i++) {
        this.state[i][j] = final[i];
      }
    }

    if (this.hasStateChanged(previousState)) {
      this.addRandomCell();
      this.updateStatus();
    }
  }

  moveDown() {
    const previousState = this.getState();

    for (let j = 0; j < 4; j++) {
      const column = this.state.map((row) => row[j]);
      const filtered = column.filter((cell) => cell !== 0);

      const merged = [];

      for (let k = filtered.length - 1; k >= 0; k--) {
        if (filtered[k] === filtered[k - 1]) {
          const mergedValue = filtered[k] * 2;

          merged.push(mergedValue);
          this.score += mergedValue;
          k--;
        } else {
          merged.push(filtered[k]);
        }
      }

      merged.reverse();

      const final = [...merged];

      while (final.length < 4) {
        final.unshift(0);
      }

      for (let i = 0; i < 4; i++) {
        this.state[i][j] = final[i];
      }
    }

    if (this.hasStateChanged(previousState)) {
      this.addRandomCell();
      this.updateStatus();
    }
  }

  getScore() {
    return this.score;
  }

  getState() {
    return this.state.map((row) => [...row]);
  }

  getStatus() {
    return this.status;
  }

  start() {
    this.status = 'playing';
    this.addRandomCell();
    this.addRandomCell();
  }

  restart() {
    this.state = this.initialState.map((row) => [...row]);
    this.score = 0;
    this.status = 'idle';
  }

  addRandomCell() {
    const emptyCells = [];

    for (let i = 0; i < this.state.length; i++) {
      for (let j = 0; j < this.state[i].length; j++) {
        if (this.state[i][j] === 0) {
          emptyCells.push([i, j]);
        }
      }
    }

    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const [row, col] = emptyCells[randomIndex];

      this.state[row][col] = 2;
    }
  }

  checkWin() {
    for (let i = 0; i < this.state.length; i++) {
      for (let j = 0; j < this.state[i].length; j++) {
        if (this.state[i][j] === 2048) {
          return true;
        }
      }
    }

    return false;
  }

  checkLose() {
    for (let i = 0; i < this.state.length; i++) {
      for (let j = 0; j < this.state[i].length; j++) {
        if (this.state[i][j] === 0) {
          return false;
        }
      }
    }

    for (let i = 0; i < this.state.length; i++) {
      for (let j = 0; j < this.state[i].length - 1; j++) {
        if (this.state[i][j] === this.state[i][j + 1]) {
          return false;
        }
      }
    }

    for (let i = 0; i < this.state.length - 1; i++) {
      for (let j = 0; j < this.state[i].length; j++) {
        if (this.state[i][j] === this.state[i + 1][j]) {
          return false;
        }
      }
    }

    return true;
  }

  hasStateChanged(previousState) {
    for (let i = 0; i < this.state.length; i++) {
      for (let j = 0; j < this.state[i].length; j++) {
        if (this.state[i][j] !== previousState[i][j]) {
          return true;
        }
      }
    }

    return false;
  }

  updateStatus() {
    if (this.checkWin()) {
      this.status = 'win';
    } else if (this.checkLose()) {
      this.status = 'lose';
    } else {
      this.status = 'playing';
    }
  }
}

window.Game = Game;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Game;
}

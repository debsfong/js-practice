'use strict'

Array.prototype.uniq = function() {
  let result = [];
  this.forEach (el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
}

[1, 3, 4, 4, 5, 6].uniq();

Array.prototype.twoSum = function() {
  let result = [];
  for (let i = 0; i < this.length; i++ ) {
    for (let j = i + 1; j < this.length; j++ ) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
}

[-1, 0, 2, -2, 1].two_sum();

function myTranspose(matrix) {
  let cols = [];

  for (let i = 0; i < matrix.length; i ++) {
    cols.push([]);
  }

  matrix.forEach((row, i) => {
    row.forEach((el, j) => {
      cols[j][i] = el;
    });
  });
  return cols;
}

myTranspose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]);

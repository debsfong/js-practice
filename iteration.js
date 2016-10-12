Array.prototype.bubbleSort = function() {
  let sorted = false
  while (sorted === false) {
    sorted = true
    for(let i = 0; i < this.length - 1; i++ ) {
      if (this[i] > this[i + 1]) {
        sorted = false;
        temp = this[i];
        this[i] = this [i + 1];
        this[i + 1] = temp;
      }
    }
  }
  return this;
}

function subString(str) {
  let results = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      results.push(str.slice(i,j));
    }
  }
  return results;
}

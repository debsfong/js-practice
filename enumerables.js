'use strict'

Array.prototype.myEach = function(cb) {
  for(let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
}

// Array.prototype.myMap = function(cb) {
//   let result = [];
//   for(let i = 0; i < this.length; i++) {
//     result.push(cb(this[i]));
//   }
//   return result;
// }

Array.prototype.myMap = function(cb) {
  let result = [];
  this.myEach(el => result.push(cb(el)));
  return result;
}

Array.prototype.myInject = function(accum) {
  this.myEach((el) => accum += el );
  return accum;
}

Array.prototype.mySelect = function(cb) {
  let results = [];
  this.myEach(el => {
    if (cb(el)) {
      results.push(el);
    }
  });
  return results;
}

Array.prototype.myCount = function(cb) {
  let count = 0;
  this.myEach(el => count += 1);
  return count;
}

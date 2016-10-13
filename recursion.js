'use strict';

// function range(start, end) {
//   let btwn = [];
//   if (end < start) {
//     return [];
//   } else {
//     for (let i = start + 1; i < end; i++ ) {
//       btwn.push(i);
//     }
//   }
//   return btwn;
// }

function range(start, end) {
  let between = [];
  if (end <= start + 1) {
    return between;
  } else {
    between.concat(range(start, end - 1));
    between.push(end - 1);
    return between;
  }
}

function range(start, end) {
  if (end <= start + 1) {
    return [];
  } else {
    let output = range(start, end - 1);
    output.push(end-1);
    return output;
  }
}

function recursion_one(base, exp) {
  if (exp <= 0) {
    return 1;
  } else {
    let output = recursion_one(base, exp - 1)
    return base * output;
  }
}

function recursion_two(base, exp) {
  if (exp <= 0 ) {
    return 1;
  } else if (exp % 2 != 0) {
    let output = recursion_two(base, (exp - 1)/2)
    return base * (output * output);
  } else {
    let output = recursion_two(base, exp/2)
    return output * output;
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    let fib = fibonacci(n - 1);
    last = fib[fib.length - 1] + fib[fib.length - 2]
    fib.push(last);
    return fib;
  }
}


function bSearch(array, target) {
  let middle = Math.floor(array.length / 2);
  if ( array[middle] === target ) {
    return middle;
  } else if (array.length <= 1) {
    return null;
  } else {
    let left = array.slice(0, middle);
    let right = array.slice(middle + 1, array.length);
    let left_output = bSearch(left, target);
    let right_output = bSearch(right, target);
    if ( left_output == null && right_output == null ) {
      return null;
    } else if (left_output != null) {
      return left_output;
    } else if (right_output != null) {
      return left.length + 1 + right_output;
    }
  }
}

bSearch([1,2,3,4,5, 6, 7, 8, 9],9)


function bSearch(array, target) {
  let middle = Math.floor((array.length)/ 2);
  console.log(array)
  console.log(middle)
  if ( array[middle] === target ) {
    return middle;
  } else if (array.length <= 1){
    return null;
  } else if ( array[middle] > target ) {
    left = array.slice(0, middle + 1)
    if (bSearch(left, target) === null ) {
      return null
    }
    return bSearch(left, target);
  } else if ( array[middle] < target ) {
    right = array.slice(middle + 1, array.length)
    if (bSearch(right, target) === null ) {
      return null
    }
    return bSearch(right, target) + middle + 1;
  }
}

//The functions for numbers 0-9 simply return the corresponding number if no argument is present, or if passesd as an argument, return an operation function 
function zero(operation) {
  return operation ? operation(0) : 0;
}

function one(operation) {
  return operation ? operation(1) : 1;
}

function two(operation) {
  return operation ? operation(2) : 2;
}

function three(operation) {
  return operation ? operation(3) : 3;
}

function four(operation) {
  return operation ? operation(4) : 4;
}

function five(operation) {
  return operation ? operation(5) : 5;
}

function six(operation) {
  return operation ? operation(6) : 6;
}

function seven(operation) {
  return operation ? operation(7) : 7;
}

function eight(operation) {
  return operation ? operation(8) : 8;
}

function nine(operation) {
  return operation ? operation(9) : 9;
}

//The functions for arithmetic operations plus, minus, times, and dividedBy all take a number as an argument and return a new function that expects another number as its argument. When this second number is provided, the new function returns the result of applying the arithmetic operation to the two numbers.

function plus(x) {
  return function(y) {
    return y + x;
  };
}

function minus(x) {
  return function(y) {
    return y - x;
  };
}

function times(x) {
  return function(y) {
    return y * x;
  };
}

function dividedBy(x) {
  return function(y) {
    return Math.floor(y / x);
  };
}

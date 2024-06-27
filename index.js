const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero not allowed");
  }
  return a / b;
};

const square = (x) => Math.pow(x, 2);

const add = (x, y) => x + y;

// callback function-> passing function to another function
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

// DRY : DONT REPEAT YOURSELF
// generic
function sumOfSomething(a, b, fn) {
  let square1 = fn(a);
  let square2 = fn(b);
  return square1 + square2;
}

let ans = sumOfSomething(1, 2, quad);
console.log(ans);

// another way
function sumOfSquare(a,b){
  let square1=square(a)
  let square2=square(b)
  return square1 + square2
}

console.log(sumOfSquare(1,2))
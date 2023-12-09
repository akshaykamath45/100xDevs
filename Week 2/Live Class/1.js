function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }
  
  function sumOfSquares(a, b,fn) {
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;
  }
  
  let ans = sumOfSquares(1, 2,square);
  console.log(ans);
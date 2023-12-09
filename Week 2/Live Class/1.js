function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }
  
  function sumOfSquares(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
  }
  
  let ans = sumOfSquares(1, 2);
  console.log(ans);
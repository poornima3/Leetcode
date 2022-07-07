/*
509. Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).


Example 1:
  Input: n = 2
  Output: 1
  Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
  Input: n = 3
  Output: 2
  Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

*/

/**
 * @param {number} n
 * @return {number}
 */

// Using For Loop
var fibThroughFoorLoop = function(n) {
  function fibon(n){
    if(n <= 1) return n;
    let a = 0;
    let b = 1;
    let sum;
    for (let i = 1; i < n; i++){
      sum = a + b;
      a = b;
      b = sum;
    }
    return sum
  }
  return fibon(n);
};

console.log("the fib of n through forloop is", fibThroughFoorLoop(6));

// Using While Loop
var fibThroughWhileLoop = function(n){
  function fibon(n){
    if(n <= 1) return n;
    let a = 0;
    let b = 1;
    let sum;
    let i = 1
    while( i < n) {
      sum = a + b;
      a = b;
      b = sum;
      i++
    }
    return sum;
  }
  return fibon(n);
}

console.log("the fib of n through while loop is", fibThroughWhileLoop(6));

// Using recursion
var fibThroughRecursion = function(n){
  function fibon(n){
    if(n == 0 || n == 1) return n;

    return fibon(n - 1) + fibon(n - 2);
  }
  return fibon(n)
}

console.log("The fib of n through recusion is", fibThroughRecursion(6));
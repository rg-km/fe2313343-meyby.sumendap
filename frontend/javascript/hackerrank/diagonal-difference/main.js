// Diagonal Difference
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
* Complete the 'diagonalDifference' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY arr as parameter.
*/

// Full Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(scores) {
  // Write your code here
  const length = scores.length;
  let diagonal1 = 0, 
       diagonal2 = 0;
  
  for (let i = 0; i < scores.length; i++) {
     
      diagonal1 += scores[i][i];
      
      diagonal2 += scores[length - 1 - i][i]
  }
  // return absolute difference value.
  return Math.abs(diagonal1 - diagonal2); 
}

function main() {
  //var n = parseInt(readLine());
  var a = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ]; // override input
  let result = diagonalDifference(a);
  console.log(result);
}

main(); // execute program

module.exports = diagonalDifference
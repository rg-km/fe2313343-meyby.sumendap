// A Very Big Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

// Complete the 'aVeryBigSum' function below.
 function aVeryBigSum(ar) {
  var sum = 0;

  for(var i = 0; i < ar.length ; i++){
   
    sum += ar[i];
  }

  return sum;
}
function main() {
  var ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]; // override input
  var result = aVeryBigSum(ar);
  console.log(result);
}

main(); // execute program

module.exports = aVeryBigSum
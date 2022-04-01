// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

// Complete the 'miniMaxSum' function below.
function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  let arrSum = [];
  let couter = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (couter !== j)
        sum += arr[j];
    }
    couter++;
    arrSum.push(sum);
  }
  let min = Math.min(...arrSum);
  let max = Math.max(...arrSum);
  return min + ' ' + max 
}
function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result)
}

main(); // execute program

module.exports = miniMaxSum
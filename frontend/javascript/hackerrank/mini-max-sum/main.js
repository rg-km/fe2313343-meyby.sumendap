// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

// Complete the 'miniMaxSum' function below.
 function miniMaxSum(arr) {
  let max = arr [0];
  let min = arr [0];
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    if(max < arr[i]) {
       max = arr[i];
    }
    if (min > arr[i]) {
        min = arr[i];
    }
    sum += arr[i];
  }
  let maxSum = sum - min;
  let minSum = sum - max;
  console.log(minSum + " " + maxSum);
  
}

function main() {
  const arr = readLine().split (" ").map(arrTemp => parseInt(arrTemp,10))

  miniMaxSum(arr);
}
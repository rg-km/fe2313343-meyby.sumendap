// Breaking the Records
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  let currentMax;
  let currentMin;

  let minCounter = 0;
  let maxCounter = 0;

  for(const score of scores){
    if(currentMax === null){
      currentMax = score;
      currentMin = score;
    }

    if(score > currentMax){
      currentMax = score;
      maxCounter += 1;
    }else if (score < currentMin){
      //console.log('this ran')
      currentMin = score;
      minCounter += 1;
    }
  }

  return [maxCounter, minCounter]
}

function main() {
  //     var n = parseInt(readLine());
  //     s = readLine().split(' ');
  //     s = s.map(Number);
  var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]; // override input
  var result = breakingRecords(scores);
  console.log(result.join(' ') + '\n')

}

main(); // execute program

module.exports = breakingRecords
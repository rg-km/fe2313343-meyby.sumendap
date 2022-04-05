// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  let amPm = s.charAt(8);
  let millitaryHour ="";
  if (amPm == "A") {
    if (s.substring(0,2) == "12"){
      millitaryHour = "00";
    }
    else {
      millitaryHour = s.substring(0,2);

    }
  }
  else { // "P"
    if (s.substring(0,2) == "12") {
      millitaryHour = s.substring(0,2);
    }
    else {
      millitaryHour = parsenInt(s.substring(0,2),10) + 12;
    }
  }
  return millitaryHour + s.substring(2,8);
}

//1.) 12 AM -> 00
//2.) 1 AM to 12 PM -> do nothing
//3.) 1 PM to 11 PM -> take hour, add 12

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion
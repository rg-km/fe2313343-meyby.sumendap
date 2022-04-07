/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let newGameBtn = document.getElementsByClassName("new-game")[0];
let randomNumber = Math.floor(Math.random() * 10) + 1;
let message = document.getElementsByClassName("message")[0];
let displayScore = document.getElementsByClassName("score-label")[0];
let input = document.getElementsByClassName("input")[0];
let checkBtn = document.getElementsByClassName("check")[0];
let score = document.getElementsByClassName("score")[0];
let tebak = 10;

let pertanyaan = "?";

newGameBtn.addEventListener("click", resetGame);
checkBtn.addEventListener("click", checkNumber);

// TODO: answer here
function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;
}

function resetGame() {
  // TODO: answer here
  //dilarang menghapus code dibawah ini!
  document.getElementById("hidden-number").innerHTML = randomNumber;
  score = 10;
  displayScore.innerHTML = score;
  input.value;
  displayMessage("Lets start guessing...");
  pertanyaan.innerHTML = "?";
  randomNumber = Math.floor(Math.random() * 10) + 1;
}

function checkNumber() {
  // TODO: answer here

  if (Number(input.value) < 1 || Number(input.value) > 10) {
    displayMessage("Guess any number between 1 and 10");
  } else if (Number(input.value) === randomNumber) {
    displayMessage("Yeay! you guessed it!");
    pertanyaan.innerHTML = "?";
  } else if (Number(input.value) != randomNumber) {
    if (score > 1) {
      if (Number(input.value) > randomNumber) {
        displayMessage("Oww... that's too big!");
      } else if (Number(input.value) < randomNumber) {
        displayMessage("Too small, buddy!");
      }
      score--;

      displayScore.innerHTML = score;
    } else {
      displayMessage("Oops, you lost the game the number is : " + randomNumber);
      displayScore.innerHTML = 0;
    }
  }
}
//dilarang menghapus code dibawah ini!
document.getElementById("hidden-number").innerHTML = randomNumber;

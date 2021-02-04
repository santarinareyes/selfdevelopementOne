// "use strict";

// What do we want to do?
// We want to have a random number to guess using > Math random
// Reduce the score when you guess the wrong number
// Change the "Game started" string to "Too low/high" depending on the value guessed
// Change the highscore value to the current score if the guess is true
// Change the background color if the guess is true
// Change the background color if the current score reaches 0

// Start Over button =
// Reset current score to 10
// Keep highscore
// New guessing number
// input value to null

//// FIRST ATTEMPT ////

///////////////
// Variables //
///////////////
// let randomNumber = randomiser();
// document.querySelector(".random").value = randomNumber;

// let currentScore = 10;
// document.querySelector(".score").textContent = currentScore;

// let highscore = 0;

// ///////////////
// // Listeners //
// ///////////////
// document.querySelector(".guess").addEventListener("click", guessClicked);
// document.querySelector(".reset").addEventListener("click", reset);

// ///////////////
// // Functions //
// ///////////////
// function randomiser() {
//   let randomNr = Math.trunc(Math.random() * 10 + 1);
//   return randomNr;
// }

// function alterText(message) {
//   document.querySelector(".texts").textContent = message;
// }

// function newScore() {
//   currentScore--;
//   document.querySelector(".score").textContent = currentScore;
// }

// function newBackground() {
//   if (currentScore < 1) {
//     document.querySelector("body").style.backgroundColor = "#FF0000";
//   } else {
//     document.querySelector("body").style.backgroundColor = "#008000";
//   }
// }

// function guessClicked() {
//   const guess = Number(document.querySelector(".number").value);
//   if (!guess) {
//     alterText("Please write a number");
//   } else if (guess === randomNumber) {
//     alterText("Good job!");
//     document.querySelector(".highscore").textContent = currentScore;
//     newBackground();
//   } else if (currentScore > 1) {
//     alterText(guess > randomNumber ? "Guess is too high" : "Guess is too low");
//     newScore();
//   } else {
//     currentScore = 1;
//     newScore();
//     alterText("Game over");
//     newBackground();
//   }
// }

// function reset() {
//   currentScore = 11;
//   randomNumber = randomiser();
//   document.querySelector(".number").value = "";
//   alterText("Good luck!");
//   newScore();
//   document.querySelector("body").style.backgroundColor = "#FFFFFF";
// }

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

//// SECOND ATTEMPT ////

// START: 2021-02-04 : 16.06
// Goal: Faster, Cleaner
// DONE: 2021-02-04 : 16:50
// Achieved? = YES!

// What do we want to do?
// We want to have a random number to guess using > Math random
// Reduce the score when you guess the wrong number
// Change string to "Too low/high" depending on the value guessed
// Change the highscore value to the current score if the guess is true
// Change the background color if the guess is true
// Change the background color if the current score reaches 0

// Start Over button =
// Reset current score to 10
// Keep highscore
// New guessing number
// input value to null

// ///////////////////////////////////////////////////////
// // Variables
// let random = document.querySelector(".random").value;
// random = Math.trunc(Math.random() * 10 + 1);

// const background = document.querySelector("body");
// const btnGuess = document.querySelector(".guess");
// const btnReset = document.querySelector(".reset");
// let currentScore = 10;
// let highscore = 0;
// ///////////////////////////////////////////////////////
// // Listeners
// btnGuess.addEventListener("click", guessClicked);
// btnReset.addEventListener("click", resetClicked);

// ///////////////////////////////////////////////////////
// // Functions
// function guessClicked() {
//   const theGuess = Number(document.querySelector(".number").value);

//   if (!theGuess) {
//     alterText("Please write a number");
//   } else if (theGuess === random) {
//     alterText("Correct!");
//     newHighscore();
//     newBackground();
//     document.querySelector(".random").textContent = theGuess;
//   } else if (theGuess !== random && currentScore > 1) {
//     alterText(theGuess > random ? "Guess is too high" : "Guess is too low");
//     currentScore--;
//     newScore();
//   } else {
//     currentScore--;
//     newScore();
//     newBackground();
//     alterText("You lost!");
//   }
// }

// function alterText(newText) {
//   document.querySelector(".texts").textContent = newText;
// }

// function newScore() {
//   if (currentScore >= 0)
//     document.querySelector(".score").textContent = currentScore;
// }

// function newHighscore() {
//   document.querySelector(".highscore").textContent = currentScore;
// }

// function newBackground() {
//   if (currentScore > 0) {
//     background.style.backgroundColor = "#008000";
//   } else {
//     background.style.backgroundColor = "#FF0000";
//   }
// }

// function resetClicked() {
//   currentScore = 10;
//   random = Math.trunc(Math.random() * 10 + 1);
//   document.querySelector(".score").textContent = currentScore;
//   background.style.backgroundColor = "#FFFFFF";
//   document.querySelector(".number").value = "";
// }

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

//// THIRD ATTEMPT ////

// START: 2021-02-04 : 21.45
// Goal: Faster, Cleaner(?)
// DONE: 2021-02-04 : 22.06
// Achieved? = YEEEEEEEES!!!!!

//Variables
let random = document.querySelector(".random").value;
random = Math.trunc(Math.random() * 10 + 1);

const btnGuess = document.querySelector(".guess");
const texts = document.querySelector(".texts");

let score = document.querySelector(".score");
score.textContent = 10;

const highscore = document.querySelector(".highscore");
highscore.textContent = 0;

const background = document.querySelector("body");

const btnReset = document.querySelector(".reset");

//Listeners
btnGuess.addEventListener("click", guessClicked);
btnReset.addEventListener("click", resetClicked);

//Functions
function guessClicked() {
  const newGuess = Number(document.querySelector(".number").value);
  if (!newGuess) {
    newText("Please write a numbers");
  } else if (newGuess === random) {
    newText("Good job");
    newHighscore();
    newBody();
    document.querySelector(".random").textContent = random;
  } else if (score.textContent > 1) {
    newText(newGuess > random ? "Guess is too high" : "Guess is too low");
    newScore();
  } else {
    score.textContent = 0;
    newText("You lost!");
    newBody();
  }
}

function newText(text) {
  texts.textContent = text;
}

function newScore() {
  score.textContent--;
}

function newHighscore() {
  highscore.textContent = score.textContent;
}

function newBody() {
  if (score.textContent > 1) {
    background.style.backgroundColor = "#008000";
  } else {
    background.style.backgroundColor = "#FF0000";
  }
}

function resetClicked() {
  random = Math.trunc(Math.random() * 10 + 1);
  score.textContent = 10;
  document.querySelector(".number").value = "";
  background.style.backgroundColor = "#FFFFFF";
}

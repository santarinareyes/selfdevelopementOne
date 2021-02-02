"use strict";

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

///////////////
// Variables //
///////////////
let randomNumber = randomiser();
document.querySelector(".random").value = randomNumber;

let currentScore = 10;
document.querySelector(".score").textContent = currentScore;

let highscore = 0;

///////////////
// Listeners //
///////////////
document.querySelector(".guess").addEventListener("click", guessClicked);
document.querySelector(".reset").addEventListener("click", reset);

///////////////
// Functions //
///////////////
function randomiser() {
  let randomNr = Math.trunc(Math.random() * 10 + 1);
  return randomNr;
}

function alterText(message) {
  document.querySelector(".texts").textContent = message;
}

function newScore() {
  currentScore--;
  document.querySelector(".score").textContent = currentScore;
}

function newBackground() {
  if (currentScore < 1) {
    document.querySelector("body").style.backgroundColor = "#FF0000";
  } else {
    document.querySelector("body").style.backgroundColor = "#008000";
  }
}

function guessClicked() {
  const guess = Number(document.querySelector(".number").value);
  if (!guess) {
    alterText("Please write a number");
  } else if (guess === randomNumber) {
    alterText("Good job!");
    document.querySelector(".highscore").textContent = currentScore;
    newBackground();
  } else if (currentScore > 1) {
    alterText(guess > randomNumber ? "Guess is too high" : "Guess is too low");
    newScore();
  } else {
    currentScore = 1;
    newScore();
    alterText("Game over");
    newBackground();
  }
}

function reset() {
  currentScore = 11;
  randomNumber = randomiser();
  document.querySelector(".number").value = "";
  alterText("Good luck!");
  newScore();
  document.querySelector("body").style.backgroundColor = "#FFFFFF";
}

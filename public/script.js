"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //WRONG INPUT
  if (!guess) {
    displayMessage("NO NUMBER! ⛔️");

    //Player WINSSSSSSSS
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "CORRECT NUMBER 👌";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // guess is wrong
  } else if (guess > 20 || guess <= 1) {
    displayMessage("(Between 1 and 20)");
  } else if (guess !== secretNumber && (guess >= 1 || guess <= 20)) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "TOO HIGH 📈" : "TOO LOW 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("YOU LOST! 😭");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

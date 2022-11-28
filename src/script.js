"use strict";
const btnCheck = document.querySelector("#btn-check");
const userInput = document.querySelector("#user-input");
const hiddenNumber = document.querySelector("#secret-number");
const hint = document.querySelector("#hint");
const userScore = document.querySelector("#user-score");
const userHighScore = document.querySelector("#user-high");
const userLife = document.querySelector("#life");
const newGame = document.querySelector("#btn-again");

let secretNumber = Math.trunc(Math.random() * 5) + 1;
let score = 0;
let highScore = 0;
let life = 3;

const numberGenerator = function () {
  secretNumber = Math.trunc(Math.random() * 5) + 1;
};

btnCheck.addEventListener("click", () => {
  let userGuess = Number(userInput.value);
  if (userGuess === secretNumber) {
    document.body.style.backgroundColor = "green";
    hiddenNumber.innerHTML = secretNumber;
    score++;
    highScore++;
    userScore.innerHTML = score;
    hint.innerText = "CORRECT NUMBER!!";
    userInput.setAttribute("readonly", true);
    btnCheck.disabled = "disabled";
    btnCheck.classList.add("bg-gray-400");
    btnCheck.classList.remove("hover:bg-gray-300");

    newGame.addEventListener("click", () => {
      let secretNum = Math.floor(Math.random() * 3 + 1);
      userInput.removeAttribute("readonly");
      document.body.style.backgroundColor = "black";
      hint.innerText = "Type your Guess";
      userScore.innerText = score;
      life = 3;
      userLife.innerText = life;
      btnCheck.disabled = "enabled";
      btnCheck.classList.remove("bg-gray-400");
      btnCheck.classList.add("hover:bg-gray-300");
      btnCheck.disabled = false;
      userHighScore.innerText = highScore;
      numberGenerator();
    });
  } else if (userGuess > secretNumber) {
    life--;
    userLife.innerText = life;
    hint.innerText = "TOO HIGH!!";
  } else if (userGuess < secretNumber) {
    life--;
    userLife.innerText = life;
    hint.innerText = "TOO LOW!!";
  }
  if (life === 0) {
    hint.innerHTML = "lost :(";
    userInput.setAttribute("readonly", true);
    btnCheck.disabled = true;
    btnCheck.classList.add("bg-gray-400");
    btnCheck.classList.remove("hover:bg-gray-300");
    document.body.style.backgroundColor = "red";
    newGame.addEventListener("click", () => {
      userInput.removeAttribute("readonly");
      document.body.style.backgroundColor = "black";
      hint.innerText = "Type your Guess";
      score = 0;
      userScore.innerText = score;
      life = 3;
      userLife.innerText = life;
      btnCheck.disabled = "enabled";
      btnCheck.classList.remove("bg-gray-400");
      btnCheck.classList.add("hover:bg-gray-300");
      btnCheck.disabled = false;
      userHighScore.innerText = highScore;
      numberGenerator();
    });
  }
});

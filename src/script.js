"use strict";
const btnCheck = document.querySelector("#btn-check");
const userInput = document.querySelector("#user-input");
const secretNumber = document.querySelector("#secret-number");
const hint = document.querySelector("#hint");

let randomNum = Math.floor(Math.random() * 21 + 1);
let userScore = 0;
let userLife = 3;

btnCheck.addEventListener("click", () => {
  if (userInput.value == randomNum) {
    secretNumber.innerHTML = randomNum;
    hint.innerHTML = "true!!!";
  } else if (userInput.value > randomNum) {
    hint.innerHTML = "TOO HIGH!!";
    userLife--;
  } else if (userInput.value < randomNum) {
    hint.innerHTML = "TOO LOW!!";
    userLife--;
  }
  if (userLife === 0) {
    console.log("you lost ");
    return;
  }
});

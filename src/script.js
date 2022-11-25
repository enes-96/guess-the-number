"use strict";
const btnCheck = document.querySelector("#btn-check");
const userInput = document.querySelector("#user-input");

const secretNum = function () {
  return Math.floor(Math.random() * 21 + 1);
};

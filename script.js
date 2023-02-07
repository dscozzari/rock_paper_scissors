'use strict';

let getComputerChoice = function () {
  // Generates random number from 1 to 3
  let choice = Math.floor(Math.random() * 3) + 1;

  // Assigns rock, paper, scissors to number
  if (choice === 1) {
    return 'rock';
  } else if (choice === 2) {
    return 'scissors';
  } else {
    return 'paper';
  }
};

console.log(getComputerChoice());

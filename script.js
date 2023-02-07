'use strict';

const getComputerChoice = function () {
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

// play one round

const playRound = function (playerChoice, computerChoice) {
  playerChoice = prompt('Rock, paper, or scissors?').toLowerCase();
  console.log('Player:', playerChoice);

  computerChoice = getComputerChoice();
  console.log('Computer:', computerChoice);

  // If player chooses rock
  if (playerChoice === 'rock' && computerChoice === 'rock') {
    console.log('It is a DRAW!');
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You WIN!, rock beats scissors!');
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    console.log('You LOSE! Paper beats rock.');
  }

  // If player chooses scissors
  if (playerChoice === 'scissors' && computerChoice === 'scissors') {
    console.log('It is a DRAW!');
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You WIN!, scissors beats paper!');
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    console.log('You LOSE! Rock beats scissors.');
  }

  // If player chooses paper
  if (playerChoice === 'paper' && computerChoice === 'paper') {
    console.log('It is a DRAW!');
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    console.log('You WIN!, paper beats rock!');
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    console.log('You LOSE! Scissors beats paper.');
  }
};

playRound();

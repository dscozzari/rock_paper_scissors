'use strict';

let playerScore = 0;
let computerScore = 0;

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
  // Takes in the player choice and converts it to all lower case.
  playerChoice = prompt('Rock, paper, or scissors?').toLowerCase();
  console.log('Player:', playerChoice);

  computerChoice = getComputerChoice();
  console.log('Computer:', computerChoice);

  // If player chooses rock
  if (playerChoice === 'rock' && computerChoice === 'rock') {
    console.log('It is a DRAW!');
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You WIN!, rock beats scissors!');
    playerScore++;
    return;
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    console.log('You LOSE! Paper beats rock.');
    computerScore++;
    return;
  }

  // If player chooses scissors
  if (playerChoice === 'scissors' && computerChoice === 'scissors') {
    console.log('It is a DRAW!');
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You WIN!, scissors beats paper!');
    playerScore++;
    return;
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    console.log('You LOSE! Rock beats scissors.');
    computerScore++;
    return;
  }

  // If player chooses paper
  if (playerChoice === 'paper' && computerChoice === 'paper') {
    console.log('It is a DRAW!');
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    console.log('You WIN!, paper beats rock!');
    playerScore++;
    return;
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    console.log('You LOSE! Scissors beats paper.');
    computerScore++;
    return;
  }
};

// Play 5 games to determine winner of 3/5 games or more points

let game = function () {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (playerScore > computerScore) {
    console.log(`You WIN! ${playerScore} : ${computerScore}`);
  } else if (playerScore === computerScore) {
    console.log(`It's a TIE! Play again.`);
  } else {
    console.log(`You LOSE! ${computerScore} : ${playerScore}`);
  }
};

game();

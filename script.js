const rockPaperScissors = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return rockPaperScissors[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a draw!";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lose! Paper beats Rock.';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lose! Scissors cut Paper.';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lose! Rock destroys Scissors.';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock destroys Scissors.';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats Rock.';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win! Scissors cut Paper.';
  } else {
    return 'something not ok.';
  }
}

const playerSelection = 'rock'.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

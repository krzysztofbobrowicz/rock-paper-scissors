let userScore = 0;
let computerScore = 0;
const rockPaperScissors = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.btn');
const allButtons = document.querySelector('#buttons');
const container = document.querySelector('#container');
const div = document.querySelector('.result');
const h3 = document.createElement('h3');
const pTag = document.createElement('p');

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return rockPaperScissors[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  while (userScore < 5 && computerScore < 5) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
      computerScore++;
      userScore++;
      return (div.innerHTML = `It's a draw! ${updateScore()}`);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      computerScore++;
      return (div.innerHTML = `You lose! Paper beats Rock.  ${updateScore()}`);
    } else if (
      playerSelection === 'paper' &&
      computerSelection === 'scissors'
    ) {
      computerScore++;
      return (div.innerHTML = `You lose! Scissors cut Paper. ${updateScore()}`);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computerScore++;
      return (div.innerHTML = `You lose! Rock destroys Scissors. ${updateScore()}`);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      userScore++;
      return (div.innerHTML = `You win! Rock destroys Scissors. ${updateScore()}`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      userScore++;
      return (div.innerHTML = `You win! Paper beats Rock. ${updateScore()}`);
    } else if (
      playerSelection === 'scissors' &&
      computerSelection === 'paper'
    ) {
      userScore++;
      return (div.innerHTML = `You win! Scissors cut Paper. ${updateScore()}`);
    } else {
      return (div.innerHTML = `something not ok. ${updateScore()}`);
    }
  }
}

function updateScore() {
  return `User score: ${userScore} Computer score: ${computerScore}`;
}

function game() {
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      let userSelection = e.target.id;
      const computerSelection = getComputerChoice();
      playRound(userSelection, computerSelection);

      if (userScore >= 5 || computerScore >= 5) {
        gameOver();
      }
    });
  });
}

function gameOver() {
  div.innerHTML = '';
  if (userScore > computerScore) {
    h3.style.color = 'Green';
    h3.innerHTML = 'User';
  } else if (userScore < computerScore) {
    h3.style.color = 'Red';
    h3.innerHTML = 'Computer';
  } else {
    h3.style.color = 'Orange';
    h3.innerHTML = 'Draw';
  }
  allButtons.style.visibility = 'hidden';
  div.innerHTML = 'And the winner is...';
  div.appendChild(h3);
  askToPlayAgain();
}

function askToPlayAgain() {
  pTag.innerHTML =
    'Do you want to play again? <button onclick="playAgain()">Play Again</button>';
  div.appendChild(h3);
  div.appendChild(pTag);
}

function playAgain() {
  allButtons.style.visibility = 'visible';
  userScore = 0;
  computerScore = 0;
  div.innerHTML = 'Choose your fighter';
}

game();

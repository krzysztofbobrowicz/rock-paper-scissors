let userScore = 0;
let computerScore = 0;
const rockPaperScissors = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('#container');
const div = document.createElement('div');

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return rockPaperScissors[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  while (userScore < 5 && computerScore < 5) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
      computerScore++;
      userScore++;
      return (div.innerHTML = `It's a draw! User Score = ${userScore}. Computer Score = ${computerScore}`);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      computerScore++;
      return (div.innerHTML = `You lose! Paper beats Rock. User Score = ${userScore}. Computer Score = ${computerScore}`);
    } else if (
      playerSelection === 'paper' &&
      computerSelection === 'scissors'
    ) {
      computerScore++;
      return (div.innerHTML = `You lose! Scissors cut Paper. User Score = ${userScore}. Computer Score = ${computerScore}`);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computerScore++;
      return (div.innerHTML = `You lose! Rock destroys Scissors. User Score = ${userScore}. Computer Score = ${computerScore}`);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      userScore++;
      return (div.innerHTML = `You win! Rock destroys Scissors. User Score = ${userScore}. Computer Score = ${computerScore}`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      userScore++;
      return (div.innerHTML = `You win! Paper beats Rock. User Score = ${userScore}. Computer Score = ${computerScore}`);
    } else if (
      playerSelection === 'scissors' &&
      computerSelection === 'paper'
    ) {
      userScore++;
      return (div.innerHTML = `You win! Scissors cut Paper. User Score = ${userScore}. Computer Score = ${computerScore}`);
    } else {
      return (div.innerHTML =
        'something not ok. User Score = ${userScore}. Computer Score = ${computerScore}');
    }
  }
}

function game() {
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      let userSelection = e.target.id;
      const computerSelection = getComputerChoice();
      playRound(userSelection, computerSelection);
      container.appendChild(div);
      console.log(userScore);
      console.log(computerScore);
      if (userScore >= 5 || computerScore >= 5) {
        gameOver();
      }
    });
  });
}

function gameOver() {
  if (userScore > computerScore) {
    div.innerHTML = `<h3>The winner is user!</h3> <p>Do you want to play again?</p> <button onclick="playAgain()">Play Again</button>`;
  } else if (userScore < computerScore) {
    div.innerHTML = `<h3>The winner is computer!</h3> <p>Do you want to play again?</p> <button onclick="playAgain()">Play Again</button>`;
  } else {
    div.innerHTML = `<h3>That's a draw!</h3> <p>Do you want to play again?</p> <button onclick="playAgain()">Play Again</button>`;
  }
}

function playAgain() {
  userScore = 0;
  computerScore = 0;
  div.innerHTML = '';
}

game();

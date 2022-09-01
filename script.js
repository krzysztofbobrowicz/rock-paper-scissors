let userScore = 0;
let computerScore = 0;
const rockPaperScissors = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.btn');

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return rockPaperScissors[randomNumber];
}
const container = document.querySelector('#container');
const div = document.createElement('div');
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    computerScore++;
    userScore++;
    return (div.innerHTML = `It's a draw! User Score = ${userScore}. Computer Score = ${computerScore}`);
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return (div.innerHTML = `You lose! Paper beats Rock. User Score = ${userScore}. Computer Score = ${computerScore}`);
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
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
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    userScore++;
    return (div.innerHTML = `You win! Scissors cut Paper. User Score = ${userScore}. Computer Score = ${computerScore}`);
  } else {
    return (div.innerHTML =
      'something not ok. User Score = ${userScore}. Computer Score = ${computerScore}');
  }
}

function game() {
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      let userSelection = e.target.id;
      const computerSelection = getComputerChoice();
      playRound(userSelection, computerSelection);

      container.appendChild(div);
    });
  });

  if (userScore > computerScore) {
    console.log('The winner is user!');
  } else if (userScore < computerScore) {
    console.log('The winner is computer!');
  } else {
    console.log("That's a draw!");
  }
}

game();

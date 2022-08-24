let userScore = 0;
let computerScore = 0;
const rockPaperScissors = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return rockPaperScissors[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    computerScore++;
    userScore++;
    return "It's a draw!";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return 'You lose! Paper beats Rock.';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return 'You lose! Scissors cut Paper.';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return 'You lose! Rock destroys Scissors.';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    userScore++;
    return 'You win! Rock destroys Scissors.';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    userScore++;
    return 'You win! Paper beats Rock.';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    userScore++;
    return 'You win! Scissors cut Paper.';
  } else {
    return 'something not ok.';
  }
}

function game() {
  while (userScore < 5 && computerScore < 5) {
    console.log(userScore);
    console.log(computerScore);
    const computerSelection = getComputerChoice();
    let userPrompt = prompt('What is your choice?');
    console.log(playRound(userPrompt, computerSelection));
  }
  console.log('thats it folks!');
  console.log(`user score is ${userScore}`);
  console.log(`computer score is ${computerScore}`);
  if (userScore > computerScore) {
    console.log('The winner is user!');
  } else if (userScore < computerScore) {
    console.log('The winner is computer!');
  } else {
    console.log("That's a draw!");
  }
}

game();

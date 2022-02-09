
//The list of choices available for the computer to pick
const computerChoice = ["Rock", "Paper", "Scissors"];

//When called it returns a random item from the array "computerChoice"
//This will be called every time it is the computer's turn
function computerPlay() {
  const randomComputerChoice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomComputerChoice];
}

let playerScore = 0;
let computerScore = 0;
  
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Hi! This is your round! Choose one: Rock, Paper or Scissors", "Your Choice").toLowerCase();
  
  computerSelection = computerPlay().toLowerCase();

  if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
  }
  
  else if (playerSelection == computerSelection) {
    playerScore++;
    computerScore++;
  }
  
  else {
    computerScore++;
  }
  return `${playerScore}, ${computerScore}`;
}

function game() {
  let result;

  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (playerScore == 5 && playerScore > computerScore) {
    result = "You Win!";
  }
  else if(computerScore == 5 && playerScore < computerScore){
    result = "You Loose!"
  }
  else {
    result = "A Tie!"
  }
  return result;
}

game();
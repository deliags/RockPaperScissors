//Player score and Computer Score are initialised
let playerScore = 0;
let computerScore = 0;

//When called it returns a random item from the array "computerChoice"
//This will be called every time it is the computer's turn
function computerPlay() {
  //The list of choices available for the computer to pick
  const computerChoice = ["Rock", "Paper", "Scissors"];
  const randomComputerChoice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomComputerChoice];
}

//The Player is asked to choose a move between Rock, Paper and Scissors
let playerSelection = prompt("Hi! This is your round! Choose one: Rock, Paper or Scissors", "Your Choice").toLowerCase();

//The computer chooses randomly
let computerSelection = computerPlay().toLowerCase();

function playRound(playerSelection, computerSelection) { 

  if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock") {
    
    //Increase Player score as they have won the round
    playerScore++;
  }
  
  else if (playerSelection == computerSelection) {
    
    //Both Player and Computer get a score as they selected the same option
    playerScore++;
    computerScore++;
  }
  
  else {

    //Computer has won this round
    computerScore++;
  }

  return `Your score is: ${playerScore}, the Computer score is: ${computerScore}`;
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
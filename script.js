let playerScore = 0;
let computerScore = 0;

//The list of choices available for the computer to pick
const computerChoice = ["Rock", "Paper", "Scissors"];

//When called it returns a random item from the array "computerChoice"
//This will be called every time it is the computer's turn
function computerPlay() {
  
  //Calculates random choice for computer
  const randomComputerChoice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomComputerChoice];
}

function playRound(playerSelection, computerSelection) {
  
  //All combinations when the player wins
  if ((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")){
    
    playerScore++;

  } else if (playerSelection == computerSelection) {

    playerScore++;
    computerScore++;

  } else {

    computerScore++;
  }

  return `The Computer chose: ${computerSelection}! 
          Your score is: ${playerScore}, the Computer score is: ${computerScore}`;
}

function game() {
  
  let turn = 0;

  //Five rounds
  for (let i = 0; i < 5; i++) {

    //The Player is asked to choose a move between Rock, Paper and Scissors
    let playerSelection = prompt(
      "Hi! This is your round! Choose one: Rock, Paper or Scissors", "Your Choice").toLowerCase();
  
    //The computer chooses randomly
    let computerSelection = computerPlay().toLowerCase();

    turn++;

    alert(`End of Round Number: ${turn}.` + playRound(playerSelection, computerSelection));
  }

  //How the score is calculated
  if (playerScore > computerScore) {
    alert(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
  } else if (computerScore > playerScore) {
    alert(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
  } else
    alert(`You tied. Final Score: ${playerScore} to ${computerScore}`);
}

// game();

const buttons = document.querySelectorAll('button');

//returns the element button upon clicking on it
buttons.forEach(button => button.addEventListener('click', (e) => {
  console.log(button)
}))

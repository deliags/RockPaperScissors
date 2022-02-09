
//The list of choices available for the computer to pick
const computerChoice = ["Rock", "Paper", "Scissors"];

//When called it returns a random item from the array "computerChoice"
//This will be called every time it is the computer's turn
function computerPlay() {
  const randomComputerChoice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomComputerChoice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Hi! This is your round! Choose one: Rock, Paper or Scissors", "Your Choice").toLowerCase();
  computerSelection = computerPlay().toLowerCase(); //Need to lowecase
  let results;

  if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
    
    results = "You Win!!";
  }
  
  else if (playerSelection == computerSelection) {
    results = "A tie!";
  }
  
  else {
    results = "You Loose!";
  }
  return results;
}

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById("result");
const turnResultH2 = document.createElement("h2");
const endResult = document.createElement("p");
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
    (playerSelection == "paper" && computerSelection == "rock")) {

    playerScore++;

  } else if (playerSelection == computerSelection) {

    playerScore++;
    computerScore++;

  } else {

    computerScore++;
  }

  return `You chose: ${playerSelection}! The Computer chose: ${computerSelection}! 
          Your score is: ${playerScore}, the Computer score is: ${computerScore}`;
}

function game() {

  let turn = 0;

  let computerSelection = computerPlay().toLowerCase();

  

    turn++;
    buttons.forEach(button => button.addEventListener('click', () => {

      turnResultH2.textContent = `End of Round Number: ${turn}` + playRound(button.id, computerSelection);

      if (playerScore === 5 || computerScore === 5) {
        console.log(playerScore);
        declareWinner();
      };
      resultDiv.append(turnResultH2);

    }))
  }

function declareWinner() {
  //How the score is calculated
  if (playerScore > computerScore) {
    endResult.textContent = `You're the winner! Final Score: ${playerScore} to ${computerScore}`;
  } else if (computerScore > playerScore) {
    endResult.textContent = `You're the loser. Final Score: ${playerScore} to ${computerScore}`;
  } else
    endResult.textContent = `You tied. Final Score: ${playerScore} to ${computerScore}`;

  resultDiv.append(endResult);
}
game();

//The list of choices available for the computer to pick
const computerChoice = ["Rock", "Paper", "Scissors"];

//When called it returns a random item from the array "computerChoice"
//This will be called every time it is the computer's turn
function computerPlay() {
  const randomComputerChoice = Math.floor(Math.random() * computerChoice.length);
  console.log(randomComputerChoice, computerChoice[randomComputerChoice]);
}
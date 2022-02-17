const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  //Starts the game by sending the user to the right screen
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    //Computer choice
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function () { //instead of => so we can use this - it's option
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        //Update Images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      })
    })
    const compareHands = (playerChoice, computerChoice) => {
      const winner = document.querySelector('.winner');

      if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {

        playerScore++;
        winner.textContent = 'Player Wins';
        return;

      } else if (playerSelection == computerSelection) {

        playerScore++;
        computerScore++;
        winner.textContent = 'It is a tie';
        return;

      } else {

        computerScore++;
        winner.textContent = 'Computer Wins';
        return;

      }

    }
  }
  //Call all inner functions
  startGame();
  playMatch();
}

//Start the game
game();
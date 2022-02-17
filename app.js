const game = () => {
  let pScore = 0;
  let cScore = 0;

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

        compareHands(this.textContent, computerChoice);
        //Update Images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });

    const updateScore = () => {
      const playerScore = document.querySelector('.player-score p');
      const computerScore = document.querySelector('.computer-score p');
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    }


    const compareHands = (playerChoice, computerChoice) => {
      const winner = document.querySelector('.winner');

      if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")) {

        pScore++;
        updateScore();
        winner.textContent = 'Player Wins';
        return;

      } else if (playerChoice === computerChoice) {

        pScore++;
        cScore++;
        updateScore();
        winner.textContent = 'It is a tie';
        return;

      } else {

        cScore++;
        updateScore();
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
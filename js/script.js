let roundNum = 1;
const roundSummary = document.querySelector('#past-move');
const buttons = document.querySelectorAll('.move');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector(
                             '#computer-score');
const tieDisplay = document.querySelector('#ties');
const roundDisplay = document.querySelector('#round-display');
let scoreboard = document.querySelector('.scoreboard');
let playerScore = 0;
let computerScore = 0;
let ties = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (roundNum > 5){
      newGameStart();
    }
    let playerMove = e.target.id
    playRound(getComputerChoice(), playerMove);
  });
});

function getComputerChoice(){
  //get a random selection of "Rock", "Paper", or "Scissors"
  //random a number from 0-2 and put in array?
  let moves = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random()*3);
  return moves[random];
}

function playRound(computerMove, userMove){
  //plays a round.
  //compares computer move to user move
  //only care if player wins of if its a tie
  //check tie first then move to winning conditions
  //so if player has rock see if computer has scissors
  //if player has paper see if computer has rock
  //if player has scissors see if computer has paper
  //otherwise loss  
  let winner = selectRoundWinner(computerMove, userMove);
  createRoundSummary(winner, computerMove, userMove);
  updateScoreboard();
  roundNum++;
  if (roundNum > 5){
    gameEnd();
    return;
  }
  roundDisplay.textContent = `Round ${roundNum}`;
}

function createRoundSummary(winner, computerMove, userMove){
  let result = winner === "tie" ? "Round is a Tie" : `${winner} Wins the Round!`;
  let summary = document.createElement('p');
  summary.textContent = `Round ${roundNum}: Player played ${userMove} and
  computer played ${computerMove}. The ${result}`;
  roundSummary.appendChild(summary);
}

function updateScoreboard(){
  playerScoreDisplay.textContent = `${playerScore}`;
  computerScoreDisplay.textContent = `${computerScore}`;
  tieDisplay.textContent = `${ties}`;
}

function gameEnd(){
  let winner = playerScore > computerScore ? "You Win!" :
    computerScore > playerScore ? "Computer Wins" : "It was a Tie";
  let finalScoreDisplay = document.createElement('h1');
  finalScoreDisplay.textContent = winner;
  scoreboard.appendChild(finalScoreDisplay);

  let playAgain = document.createElement('p');
  playAgain.textContent = "Make Another Move to Play Again";
  scoreboard.appendChild(playAgain);
}

function newGameStart(){
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  roundNum = 1;
  removeRoundSummary();
  updateScoreboard();
  scoreboard.removeChild(scoreboard.lastChild);
  scoreboard.removeChild(scoreboard.lastChild);
  roundDisplay.textContent = `Round ${roundNum}`;

}

function removeRoundSummary(){
  while(roundSummary.firstChild){
    roundSummary.removeChild(roundSummary.firstChild);
  }
}

function selectRoundWinner(player1, player2){
  let winner;
  if (player1 === player2){
    winner = "tie";
    ties++;
  }else if (player1 === "Rock"){
    if (player2 === "Scissors"){
      winner = "player";
      playerScore++;
    }else{
      winner = "computer";
      computerScore++;
    }
  }else if (player1 === "Paper"){
    if (player2 === "Rock"){
      winner = "player";
      playerScore++;
    }else{
      winner = "computer";
      computerScore++;
    }
  }else if (player1 === "Scissors"){
    if (player2 === "Paper"){
      winner = "player";
      playerScore++;
    }else{
      winner = "computer"
      computerScore++;
    }
  }
  return winner;
}


//game();

//Game starts when user clicks a button
//Get the player move from the button click
//Select a random move for the computer
//Compare the two to select the winner
//Create Round Summary
//Update the scoreboard 
//Begin Next Round
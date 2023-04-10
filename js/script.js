const MOVES = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
  //get a random selection of "Rock", "Paper", or "Scissors"
  //random a number from 0-2 and put in array?
  let random = Math.floor(Math.random()*3);
  return MOVES[random];
}

function getPlayerSelection(){
  let legalSelection = false;
  let userSelection;
  while(!legalSelection){
    userSelection = prompt('Please select your move. Legal Moves are "Rock", "Paper", or "Scissors".').toLowerCase();
    userSelection = userSelection[0].toUpperCase() + userSelection.slice(1);
    //check to see if userselection is a legal move
    if (MOVES.includes(userSelection)) legalSelection = true;
  }
  return userSelection;
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
  let roundWinner;
  if (userMove === computerMove){
    roundWinner = "tie";
  }else if (userMove === "Rock"){
    if (computerMove === "Scissors"){
      roundWinner = "player";
    }else{
      roundWinner = "computer";
    }
  }else if (userMove === "Paper"){
    if (computerMove === "Rock"){
      roundWinner = "player";
    }else{
      roundWinner = "computer";
    }
  }else if (userMove === "Scissors"){
    if (computerMove === "Paper"){
      roundWinner = "player";
    }else{
      roundWinner = "computer"
    }
  }
  roundWinner === "tie" ? console.log("Tie") : console.log(`${roundWinner} Wins!`);
  return roundWinner;
}

function printResult(playerScore, computerScore, ties){
  if (playerScore > computerScore){
    console.log(`You Win! The score was Player:${playerScore} Computer:${computerScore} with ${ties} tie(s)`);
  }else if (playerScore < computerScore){
    console.log(`You Lost. The score was Computer:${computerScore} Player:${playerScore} with ${ties} tie(s)`);
  }else{
    console.log(`It was a Tie. The score was Player:${playerScore} Computer:${computerScore} with ${ties} tie(s)`);
  }
}

function game(){
  //plays 5 rounds then show who won the most games.
  let roundNum = 1;
  let playerScore = 0;
  let computerScore = 0;
  let ties = 0;
  let roundResult;
  while (roundNum<=5){
    roundResult = playRound(getComputerChoice(), getPlayerSelection()); 
    roundResult === "player" ? playerScore++ : roundResult === "computer" ? computerScore++ : ties++;
    roundNum++;
  }
  printResult(playerScore, computerScore, ties);
}

game();
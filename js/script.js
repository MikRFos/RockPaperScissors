const MOVES = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
  //get a random selection of "Rock", "Paper", or "Scissors"
  //random a number from 0-2 and put in array?
  let random = Math.floor(Math.random()*3);
  console.log(`rng is ${random}, Move is ${MOVES[random]}`);
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
  if (userMove === computerMove){
    return "tie";
  }
  if (userMove === "Rock"){
    if (computerMove === "Scissors"){
      return "player";
    }else{
      return "computer";
    }
  }
  if (userMove === "Paper"){
    if (computerMove === "Rock"){
      return "player";
    }else{
      return "computer";
    }
  }
  if (userMove === "Scissors"){
    if (computerMove === "Paper"){
      return "player";
    }else{
      return "computer"
    }
  }
}

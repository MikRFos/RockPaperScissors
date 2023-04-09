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
getPlayerSelection();
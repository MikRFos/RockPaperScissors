const MOVES = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
  //get a random selection of "Rock", "Paper", or "Scissors"
  //random a number from 0-2 and put in array?
  let random = Math.floor(Math.random()*3);
  console.log(`rng is ${random}, Move is ${MOVES[random]}`);
  return MOVES[random];
}

getComputerChoice();
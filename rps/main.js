// This is going to be the main area that we write the rock, paper, scissors function

/* pseudocode area - 

start best of 5 rps game

create player and create computer character

if player or pc has not won 3 games, keep playing

keep playing - 

    selection either rock, paper, or scissors

    computer randomly selects random rock, paper, or scissors

    player makes selection - either rock, paper or scissors

    else print, sorry you must select either Rock, Paper, or scissors



selection results

    if selection is Rock, it is greater than  scissors, and less than paper

    else if selection is Paper, it is greater than rock, and less than scissors

    else if selection is Scissors, it is greater than paper, and less than rock

    


compare selections

    If player selection is greater than computer selection, then player wins round

    else the computer wins round

End game

    if player wins 3 rounds, then players wins - GAME OVER

    else if computer wins 3 round, then computer wins - GAME OVER

    else GAME continues until one player wins three round

*/

console.log(" ---------- Let's Play Rock! Paper! Scissors! ---------- ");

console.log("The best of 5 rounds wins the game! Good Luck!")



let playerSelection = console.log(prompt("Enter you selection here: "));



//aparently to get playRound() to work, you need to allow for in the input to always be set to a string, even if empty, henc || " "

if (playerSelection != null && playerSelection != undefined) {
    playerSelection = playerSelection;
} else {
    playerSelection = '';
}



let playerGuess = "oh boy donuts";

console.log(playerGuess.toUpperCase());

/*
let computerSelection;

const rpsSelect  = ['ROCK', 'PAPER', 'SCISSORS'] ;

// shoot function utilizes the Math.random feature by selecting a random integer within the array index!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function shoot(min, max) {

    min = Math.ceil(2);

    max = Math.floor(0);

    return rpsSelect[(Math.floor(Math.random() * (max - min) + min))];


}


function compare() { 
    console.log('Booya');
}


function playRound(playerSelection, computerSelection) {

    if (playerGuess == rpsSelect[0] || playerGuess === rpsSelect[1] || playerGuess === rpsSelect[2]) {
        console.log(compare()); 
    } else {
        console.log(prompt("Please Enter either Rock, Paper, or Scissors: "));
    }

    // console.log("Let's play a round!");

    // computerSelection = console.log(shoot());

   

}


*/



// playRound();

// let computerSelection = getComputerChoice;





    
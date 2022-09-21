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

let playerSelection = console.log(window.prompt("Enter you selection here: "));
    
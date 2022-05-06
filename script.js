let humanScore = 0;
let robotScore = 0;

document.getElementById("rock").addEventListener('click', function() {playRound('rock')}); 
document.getElementById("scissors").addEventListener('click', function() {playRound('scissors')}); 
document.getElementById("paper").addEventListener('click', function() {playRound('paper')}); 

function playRound(playerChoice) {
    compChoice = computerPlay();
    winner = compareChoices(compChoice, playerChoice);
    printWinner(winner, compChoice, playerChoice);
    tallyScore(winner);
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random()*3);

    return choices[randNum];
}

function compareChoices(computer, player) {
    switch(computer) {
        case "rock":
            if(player === "rock") {
                return('tie');
            }
            else if(player === "paper") {
                return('player');
            }
            else {
                return('computer');
            }

        case "paper":
            if(player === "rock") {
                return('computer');
            }
            else if(player === "paper") {
                return('tie');
            }
            else {
                return('player');
            }

        case "scissors":
            if(player === "rock") {
                return('player');
            }
            else if(player === "paper") {
                return('computer');
            }
            else {
                return('tie');
            }
    }
}

function printWinner(results, playerChoice, compChoice) {

    switch(results) {
        case "player":
            console.log(`${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${compChoice[0].toUpperCase() + compChoice.slice(1)}... You Win!`)
            humanScore++;
            break;
        case "computer":
            console.log(`${compChoice[0].toUpperCase() + compChoice.slice(1)} beats ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}... You Lose!`)
            robotScore++;
            break;
        case "tie":
            console.log(`You both chose ${compChoice[0].toUpperCase() + compChoice.slice(1)}... Tie Game!`)
            break;
    }
    console.log(`Human: ${humanScore} ... Robot ${robotScore}`)
}

function tallyScore() {
    
    if(humanScore == 5 && robotScore == 5) {
        console.log("Due to a stalemate the fate of humanity shall be decided another day...")
        resetScore();
    }
    else if (robotScore == 5) {
        console.log("The AI has surpassed humanity and the robot uprising shall begin")
        resetScore();
    }
    else if (humanScore == 5) {
        console.log("You have prevented the robot uprising by winning this game!")
        resetScore();
    }
}

function resetScore() {
    humanScore = 0;
    robotScore = 0;
}


let humanScore = 0;
let robotScore = 0;

document.getElementById("Rock").addEventListener('click', function() {playRound('Rock')}); 
document.getElementById("Scissors").addEventListener('click', function() {playRound('Scissors')}); 
document.getElementById("Paper").addEventListener('click', function() {playRound('Paper')}); 

function playRound(playerChoice) {
    document.getElementById("outcome").innerText = "";
    compChoice = computerPlay();
    winner = compareChoices(compChoice, playerChoice);
    printWinner(winner, compChoice, playerChoice);
    tallyScore(winner);
}

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randNum = Math.floor(Math.random()*3);

    return choices[randNum];
}

function compareChoices(computer, player) {
    switch(computer) {
        case "Rock":
            if(player === "Rock") {
                return('tie');
            }
            else if(player === "Paper") {
                return('player');
            }
            else {
                return('computer');
            }

        case "Paper":
            if(player === "Rock") {
                return('computer');
            }
            else if(player === "Paper") {
                return('tie');
            }
            else {
                return('player');
            }

        case "Scissors":
            if(player === "Rock") {
                return('player');
            }
            else if(player === "Paper") {
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
            document.getElementById("messages").innerText = `${playerChoice} beats ${compChoice}... You Win!`;
            humanScore++;
            break;
        case "computer":
            document.getElementById("messages").innerText = `${compChoice} beats ${playerChoice}... You Lose!`;
            robotScore++;
            break;
        case "tie":
            document.getElementById("messages").innerText= `You both chose ${compChoice}... It's a tie!`;
            break;
    }
    document.getElementById("humanScore").innerText = `Humans: ${humanScore}`;
    document.getElementById("robotScore").innerText = `Robots: ${robotScore}`;
    
}

function tallyScore() {
    outcome = document.getElementById("outcome");
    if(humanScore == 5 && robotScore == 5) {
       outcome.innerText = "Due to a stalemate the fate of humanity shall be decided another day..."
        resetScore();
    }
    else if (robotScore == 5) {
        outcome.innerText = "The AI has surpassed humanity and the robot uprising shall begin"
        resetScore();
    }
    else if (humanScore == 5) {
        outcome.innerText = "You have prevented the robot uprising by winning this game!"
        resetScore();
    }
}

function resetScore() {
    humanScore = 0;
    robotScore = 0;
}


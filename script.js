function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random()*3);

    return choices[randNum];
}

function playerSelection() {
    let playerChoice = '';
    
    while(!['rock', 'paper', 'scissors'].includes(playerChoice)) {
        playerChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    };

    return playerChoice; 
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

function playRound() {
    compChoice = computerPlay();
    playerChoice = playerSelection();
    winner = compareChoices(compChoice, playerChoice);

    return winner;
}

function game() {
    let humanScore = 0;
    let robotScore = 0;

    for (let i = 0; i < 5; i++) {
        results = playRound();
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
                humanScore++;
                robotScore++;
                break;
        }
        console.log(`Human: ${humanScore} ... Robot ${robotScore}`)
    }
    
    if(humanScore > robotScore) {
        console.log("You have prevented the robot uprising by winning this game!")
    }
    else if (robotScore > humanScore) {
        console.log("The AI has surpassed humanity and the robot uprising shall begin")
    }
    else {
        console.log("Due to a stalemate the fate of humanity shall be decided another day...")
    }
}

game();
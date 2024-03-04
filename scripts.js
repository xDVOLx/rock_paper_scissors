function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "rock"
    } else if (randomNum === 2) {
        return "paper"
    } else if (randomNum === 3) {
        return "scissors"
    }
}

function getPlayerChoice() {
    let playerChoice = parseInt(prompt("Enter 1 to play Rock, 2 to play Paper, or 3 to player Scissors"));
    if (playerChoice === 1) {
        return "rock"
    } else if (playerChoice === 2) {
        return "paper"
    } else if (playerChoice === 3) {
        return "scissors"
    }
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    console.log(`computer chose ${computerSelection}`)
    console.log(`player chose ${playerSelection}`)
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Both sides chose Rock. Tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "Paper covers Rock. Computer wins!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "Rock smashes Scissors. Player wins!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Both sides chose Paper. Tie!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "Paper covers Rock. Player wins!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "Scissors cut Paper. Computer wins!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Both sides chose Scissors. Tie!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "Rock smashes Scissors. Computer wins!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "Scissors cut Paper. Player wins!"
    }
}

function playGame(rounds) {
    let round = 0;
    function playRoundWithDelay() {
        if (round < rounds) {
            let playerSelection = getPlayerChoice();
            let computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
            round++;
            setTimeout(playRoundWithDelay, 1000);
        } else {
            console.log(`Final Score\n Player: ${playerScore}\n Computer ${computerScore}`)
        }
    }
    playRoundWithDelay();
}

playGame(5);

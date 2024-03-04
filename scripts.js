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

let computerSelection = getComputerChoice()
let playerSelection = getPlayerChoice()

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Both sides chose Rock. Tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Paper covers Rock. Computer wins!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock smashes Scissors. Player wins!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Both sides chose Paper. Tie!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper covers Rock. Player wins!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors cut Paper. Computer wins!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Both sides chose Scissors. Tie!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Rock smashes Scissors. Computer wins!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors cut Paper. Player wins!"
    }
}

console.log(`computer chose ${computerSelection}`)
console.log(`player chose ${playerSelection}`)
console.log(playRound(playerSelection, computerSelection))
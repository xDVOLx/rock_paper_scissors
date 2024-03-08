//__________SCORES____________
let playerScore = 0
let computerScore = 0

//__________COMPUTER CHOICE____________
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

//_________GAME LOGIC____________
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
    };
};

//__________PLAYER CHOICE BUTTONS____________
const playerChoices = document.getElementById('playerChoiceBtns');

const rockButton = document.createElement('button');
rockButton.textContent = "Rock";
playerChoices.appendChild(rockButton);
rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

const paperButton = document.createElement('button');
paperButton.textContent = "Paper";
playerChoices.appendChild(paperButton);
paperButton.addEventListener('click', () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors";
playerChoices.appendChild(scissorsButton);
scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

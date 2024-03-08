//__________SCOREKEEPING____________
let playerWins = 0;
let computerWins = 0;
const roundResults = document.getElementById('resultsArea');

const playerScore = document.createElement('p');
playerScore.textContent = `Player Score: ${playerWins}`;
roundResults.appendChild(playerScore);

const computerScore = document.createElement('p');
computerScore.textContent = `Computer Score: ${computerWins}`;
roundResults.appendChild(computerScore);

function updateScores() { //to be called on button press after playRound()
    playerScore.textContent = `Player Score: ${playerWins}`;
    computerScore.textContent = `Computer Score: ${computerWins}`;
};

//__________COMPUTER CHOICE____________
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else if (randomNum === 3) {
        return "scissors";
    };
};

//_________GAME LOGIC____________
function playRound(playerSelection, computerSelection) {
    console.log(`computer chose ${computerSelection}`);
    console.log(`player chose ${playerSelection}`);
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Both sides chose Rock. Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        return "Paper covers Rock. Computer wins!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        return "Rock smashes Scissors. Player wins!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Both sides chose Paper. Tie!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        return "Paper covers Rock. Player wins!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        return "Scissors cut Paper. Computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Both sides chose Scissors. Tie!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        return "Rock smashes Scissors. Computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        return "Scissors cut Paper. Player wins!";
    };
};

//__________PLAYER CHOICE BUTTONS____________
const playerChoices = document.getElementById('playerChoiceBtns');

const rockButton = document.createElement('button');
rockButton.textContent = "Rock";
rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScores();
});
playerChoices.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = "Paper";
paperButton.addEventListener('click', () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScores();
});
playerChoices.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScores();
});
playerChoices.appendChild(scissorsButton);

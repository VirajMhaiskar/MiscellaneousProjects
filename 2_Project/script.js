const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".comp-score");
const wonMsg = document.querySelector(".won-msg");

function computerTurnFunc() {
    let computerChoice;
    let computerTurn = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(computerTurn === 1) {
        computerChoice = "rock";
    } else if(computerTurn === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}


rock.addEventListener("click", () => {
    const computerChoice = computerTurnFunc();
    if(computerChoice === "scissors") {
        wonMsg.textContent = `You chose rock, computer chose ${computerChoice}. YOU WON!`;
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else if(computerChoice === "rock") {
        wonMsg.textContent = (`You chose rock, computer chose ${computerChoice}. It's a DRAW!!`);
    } else {
        wonMsg.textContent = (`You chose rock, computer chose ${computerChoice}. COMPUTER WON!!`);
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
});

paper.addEventListener("click", () => {
    const computerChoice = computerTurnFunc();
    if(computerChoice === "rock") {
        wonMsg.textContent = (`You chose paper, computer chose ${computerChoice}. YOU WON!`);
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else if(computerChoice === "paper") {
        wonMsg.textContent = (`You chose paper, computer chose ${computerChoice}. It's a DRAW!!`);
    } else {
        wonMsg.textContent = (`You chose paper, computer chose ${computerChoice}. COMPUTER WON!!`);
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
});

scissors.addEventListener("click", () => {
    const computerChoice = computerTurnFunc();
    if(computerChoice === "paper") {
        wonMsg.textContent = (`You chose scissors, computer chose ${computerChoice}. YOU WON!`);
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else if(computerChoice === "scissors") {
        wonMsg.textContent = (`You chose scissors, computer chose ${computerChoice}. It's a DRAW!!`);
    } else {
        wonMsg.textContent = (`You chose scissors, computer chose ${computerChoice}. COMPUTER WON!!`);
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
});
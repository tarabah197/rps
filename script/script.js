//Rock Paper Scissors
//CREATE function to random computer choice +
//CREATE human input +/-
//CREATE function to compare to choices
//Show to choices (human and computer)
//IF human won --> Write Congrats
//ELSE try again

let humanChoice;
const userChoice = document.querySelector(".game-area");
const gameScore = document.querySelector(".game-score");
const paraFeedback = document.querySelector('#para-feedback');
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#computer-score');
const restartBtn = document.querySelector('#restart');

restartBtn.addEventListener('click', restart);
    
    
function restart() {
    userScorePara.textContent = 0;
    computerScorePara.textContent = 0;
    paraFeedback.textContent = "...";
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*3) + 1;
    let computerChoice = "";

    if (randomChoice === 1) {
        computerChoice = "Rock";
    } else if (randomChoice === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice) {
        return paraFeedback.textContent = "It's a tie!";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return paraFeedback.textContent = "You win! Rock beats Scissors!";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return paraFeedback.textContent = "You win! Paper beats Rock!";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return paraFeedback.textContent = "You win! Scissors beats Paper!";
    } else {
        return paraFeedback.textContent = "You lose! " + computerChoice + " beats " + humanChoice + "!";
    }
}

function playGame() {
    let computerChoice = getComputerChoice();
    let humanScore = Number(userScorePara.textContent);
    let computerScore = Number(computerScorePara.textContent);

    let result = playRound(humanChoice, computerChoice);

    if (result.includes("win")) {
        humanScore++;
        userScorePara.textContent = humanScore;
    } else if (result.includes("lose")) {
        computerScore++;
        computerScorePara.textContent = computerScore;
    }

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            restart();
            return paraFeedback.textContent = "You win the game!";
        } else if (humanScore < computerScore) {
            restart();
            return paraFeedback.textContent = "You lose the game!";
        } else {
            restart();
            return paraFeedback.textContent = "It's a tie!";
        }
    }
}

userChoice.addEventListener('click', function(event){
    let btn = event.target.closest('button');

    if (!btn) return;

    if (!userChoice.contains(btn)) return;

    humanChoice = event.target.textContent;
    playGame();

    return;
});

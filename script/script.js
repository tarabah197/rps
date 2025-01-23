//Rock Paper Scissors
//CREATE function to random computer choice +
//CREATE human input +/-
//CREATE function to compare to choices
//Show to choices (human and computer)
//IF human won --> Write Congrats
//ELSE try again

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

// function getHumanChoice(humanChoice = prompt("Enter: Rock || Paper || Scissors")) {
//     if (humanChoice !== undefined || humanChoice !== null || humanChoice !== "") {
//         console.log(humanChoice);
//     } else {
//         getHumanChoice();
//     }
//     return humanChoice;
// }

function playRound(computerChoice,humanChoice){
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return "You win! Rock beats Scissors!";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "You win! Paper beats Rock!";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return "You win! Scissors beats Paper!";
    } else {
        return "You lose! " + computerChoice + " beats " + humanChoice + "!";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // for (let i = 0; i < 5; i++) {
         let humanChoice = getHumanChoice();
         let computerChoice = getComputerChoice();
         let result = playRound(humanChoice, computerChoice);
         console.log(result);

        if (result.includes("win")) {
            humanScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const game = document.querySelector(".game-area");

game.addEventListener('click', function(event){
    let humanChoice = event.target.textContent;
    let computerChoice = getComputerChoice();
    let result = playRound(computerChoice, humanChoice);
    console.log(result);
});
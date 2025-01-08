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

function getHumanChoice(humanChoice = prompt("Enter: Rock || Paper || Scissors")) {
    //const humanChoice = prompt("Enter: Rock || Paper || Scissors");

    if (humanChoice !== undefined || humanChoice !== null || humanChoice !== "") {
        alert(humanChoice);
    } else {
       // alert('Enter correct value');
    }
    return humanChoice;
}

let shapes = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll('input');

function disableButtons() {
    btns.forEach(btn => {
        btn.disabled = true
    })
}

let scorePlayer = 0;
let scoreComputer = 0;
let currentResult = '';

let computerPlay = () => shapes[Math.floor(Math.random() * shapes.length)];

let selection;

function processClick(btn) {
    document.getElementsByClassName('start')[0].style.visibility = "hidden";
    selection = btn.value;
    game();
    return selection;
}

function playRound(playerSelection, computerSelection) {
    let winningCombinations = ["rock, scissors", "paper, rock", "scissors, paper"];
    let combination = playerSelection + ", " + computerSelection;
    if (playerSelection == computerSelection) {
        return `Draw! - both selected ${playerSelection}`;
    }

    if (winningCombinations.includes(combination)) {
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
    }
}

function game() { 
    let computerSelection = computerPlay();
    let playerSelection = selection;
    let currentResult = playRound(playerSelection, computerSelection);
    document.getElementById('currentResult').innerHTML = currentResult;

    if (currentResult.includes("Win!")) scorePlayer += 1
    else if (currentResult.includes("Lose!")) scoreComputer += 1;

    document.getElementById('total').innerHTML = `Current results: Your score - ${scorePlayer}, Computer score - ${scoreComputer}`;
    

    if (scorePlayer == 5 || scoreComputer == 5) {
        let gameOver = '';

        if (scorePlayer > scoreComputer) gameOver = "Congratulations, you did it!"
        else if (scorePlayer < scoreComputer) gameOver = "Sorry, better luck next time!"
        else gameOver = "It's a draw!";

        gameOver = gameOver + " Please reload the page to repeat the game!"
        document.getElementById('gameOver').innerHTML = gameOver;

        document.getElementById('total').innerHTML = `Final score: Your score - ${scorePlayer}, Computer score - ${scoreComputer}`;
        disableButtons()
    }
}
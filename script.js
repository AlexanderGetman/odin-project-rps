let shapes = ["rock", "paper", "scissors"];

let computerPlay = () => shapes[Math.floor(Math.random() * shapes.length)];

function playerPlay() {
    let selection = prompt("Please enter your choice:").toLowerCase();
    switch (selection) {
        case "rock":
        case "paper":
        case "scissors":
            return selection;
            break;
        default:
            return playerPlay();
    }
}

function playRound(playerSelection, computerSelection) {
    let winning_combinations = ["rock, scissors", "paper, rock", "scissors, paper"];
    let combination = playerSelection + ", " + computerSelection;
    if (playerSelection == computerSelection) {
        return "Draw!";
    }

    if (winning_combinations.includes(combination)) {
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`
    }
}

function game() {
    let score_player = 0;
    let score_computer = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        let current_result = playRound(playerSelection, computerSelection);
        console.log(current_result);

        if (current_result.includes("Win!")) score_player += 1
        else if (current_result.includes("Lose!")) score_computer += 1;

        console.log(`Current results: Your score - ${score_player}, Computer score - ${score_computer}`)
    }

    if (score_player > score_computer) console.log("Congratulations, you did it!")
    else if (score_player < score_computer) console.log("Sorry, better luck next time!")
    else console.log("It's a draw!");

    console.log(`Final score: Your score - ${score_player}, Computer score - ${score_computer}`)
}

game();
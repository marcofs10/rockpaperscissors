const options = ["rock", "paper", "scissors"];
const victory = { "rock": "scissors", "paper": "rock", "scissors": "paper" }
let playerPoint = 0;
let compPoint = 0;
let run = true;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function playerRound() {
    if (run == true) {
        let playerSelection = this.innerText;
        let computerSelection = getComputerChoice();
        if (playerSelection == computerSelection) {
            results.innerText = "Draw";
        }
        else {
            for (let i = 0; i < 3; i++) {
                if (playerSelection == Object.keys(victory)[i]) {
                    if (computerSelection == victory[Object.keys(victory)[i]]) {
                        results.innerText = `You win. ${playerSelection} wins against ${computerSelection}`;
                        playerPoint++;
                        game(playerPoint, compPoint);
                    }
                    else {
                        results.innerText = `You loose. ${playerSelection} looses against ${computerSelection}`;
                        compPoint++;
                        game(playerPoint, compPoint);
                    }
                }
            }
        }
    }
}
function game(playerPoint, compPoint) {
    if (playerPoint == 5) {
        winner.innerText = "Congratulations. You won.";
        run = false;
        return;
    }
    else if (compPoint == 5) {
        winner.innerText = "You loose :(";
        run = false;
        return;
    }
    else {
        return;
    }
}

const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const winner = document.querySelector('#winner');

buttonRock.addEventListener("click", playerRound);
buttonPaper.addEventListener("click", playerRound);
buttonScissors.addEventListener("click", playerRound);
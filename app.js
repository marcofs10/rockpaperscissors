const options = ["rock","paper","scissors"];
const victory = {"rock":"scissors","paper":"rock","scissors":"paper"}
let playerPoint = 0;
let compPoint = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    return options[randomNumber];
}

function playerRound(computerSelection){
    const playerPrompt = prompt("Make a choice: ");
    const playerSelection= playerPrompt.toLowerCase();
    if (playerSelection==computerSelection){
        console.log("Draw");
    }
    else{
        for(let i=0;i<3;i++){
            if(playerSelection==Object.keys(victory)[i]){
                if(computerSelection==victory[Object.keys(victory)[i]]){
                    console.log(`You win. ${playerSelection} wins against ${computerSelection}`);
                    playerPoint++;
                    console.log(playerPoint)
                }
                else{
                    console.log(`You loose. ${playerSelection} looses against ${computerSelection}`);
                    compPoint++;
                }
            }
        }
    }
}
function game(){
    while(((playerPoint>=5)||(compPoint==5))==false){
        let computerSelection = getComputerChoice();
        playerRound(computerSelection);
    }
    if (playerPoint==5){
        console.log("Congratulations. You won.");
    }
    else{
        console.log("You loose :(");
    }
}
game();
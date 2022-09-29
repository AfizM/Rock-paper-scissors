function getComputerChoice(){
    let number = Math.floor((Math.random() * 3) + 1);
    if(number == 1){
       
        console.log("Rock");
        return "Rock";
    }
    else if(number == 2){
        console.log("Scissors");
        return "Scissors";
    
    }
    else{
        console.log("Scissors");
        return 'Paper';
       
    }
}

function playerSelection(){
    let playerSelection = prompt("Rock,Paper,Scissors");
    return playerSelection;
}


// let playerSelection = prompt("Rock,Paper,Scissors");
// let computerSelection = getComputerChoice;

function playRound(playerSelection, computerSelection){
    if(playerSelection.includes("rock") && computerSelection.includes("scissors")){
        return "You Win! Rock beats scissors";
    }
    else if(playerSelection.includes("rock") && computerSelection.includes("paper")){
        return "You Lose! Paper beats rock";
    }
    else if(playerSelection.includes("rock") && computerSelection.includes("rock")){
        return "Draw!";
    }
    else if(playerSelection.includes("scissors") && computerSelection.includes("rock")){
        return "You Lose! Scissors loses rock";
    }
    else if(playerSelection.includes("scissors") && computerSelection.includes("paper")){
        return "You Win! Scissors beats paper";
    }
    else if(playerSelection.includes("scissors") && computerSelection.includes("scissors")){
        return "Draw!";
    }
    else if(playerSelection.includes("paper") && computerSelection.includes("rock")){
        return "You Win! Paper beats rock";
    }
    else if(playerSelection.includes("paper") && computerSelection.includes("scissors")){
        return "You Lose! Paper loses to scissors";
    }
    else if(playerSelection.includes("paper") && computerSelection.includes("paper")){
        return "Draw!";
    }


}
let playerWinCount = 0;
let computerWinCount = 0;

function game(){
    for(let i = 0; i < 5; i++){
        let finalMessage = playRound(playerSelection().toLowerCase(), getComputerChoice().toLowerCase());
        let finalMessageLowerCase = finalMessage.toLowerCase();
        console.log(finalMessageLowerCase);
        if(finalMessageLowerCase.includes("win")){
            playerWinCount++;
            console.log(`You have won ${playerWinCount} times`)
        }
        else if(finalMessageLowerCase.includes("lose")){
            computerWinCount++;
            console.log(`Computer has won ${computerWinCount} times`)
        }
        else{
            console.log("draw");
        }

       
       

    }
    console.log("Player total: " + playerWinCount + "Computer total: " + computerWinCount);
    
}

game();





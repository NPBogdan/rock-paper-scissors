function getComputerChoise(){
    let computerChoise = ["Rock","Paper","Scissor"];
    let selection = Math.floor(Math.random() * 3);
    return computerChoise[selection];
};

function game(playerChoise, computerChoise){
    if(playerChoise.toLowerCase() === computerChoise.toLowerCase()){
        return "TIES";
    }
    else if(playerChoise.toLowerCase() == "rock"){
        switch(computerChoise.toLowerCase()){
            case "paper":
                return "You lose! Paper beats rock";
            case "scissor":
                return "You win! Rock beats scissor";
        }
    }
    else if(playerChoise.toLowerCase() == "paper"){
        switch(computerChoise.toLowerCase()){
            case "rock":
                return "You win! Paper beats rock";
            case "scissor":
                return "You lost! Scissor beats paper";
        }
    }
    else if(playerChoise.toLowerCase() == "scissor"){
        switch(computerChoise.toLowerCase()){
            case "paper":
                return "You win! Scissor beats paper";
            case "rock":
                return "You lost! Rock beats scissor";
        }
    }
};

function exec(){
    let userIn = prompt("Chose you weapon from Rock/Paper or Scissor:");
    console.log(userIn);
    let computerIn = getComputerChoise();
    console.log(computerIn);
    let result = game(userIn,computerIn);
    return result;
}

console.log(exec());
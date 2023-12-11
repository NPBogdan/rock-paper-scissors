function getComputerChoise() {
    let computerChoise = ["Rock", "Paper", "Scissor"];
    let selection = Math.floor(Math.random() * 3);
    return computerChoise[selection];
};

function game(playerChoise, computerChoise) {
    let result;
    if (playerChoise.toLowerCase() === computerChoise.toLowerCase()) {
        return "Ties";
    }
    else if (playerChoise.toLowerCase() == "rock") {
        switch (computerChoise.toLowerCase()) {
            case "paper":
                result = [1, "You lose! Paper beats rock"];
                return result;
            case "scissor":
                result = [2, "You win! Rock beats scissor"];
                return result;
        }
    }
    else if (playerChoise.toLowerCase() == "paper") {
        switch (computerChoise.toLowerCase()) {
            case "rock":
                result = [2, "You win! Paper beats rock"];
                return result;
            case "scissor":
                result = [1, "You lost! Scissor beats paper"];
                return result;
        }
    }
    else if (playerChoise.toLowerCase() == "scissor") {
        switch (computerChoise.toLowerCase()) {
            case "paper":
                result = [2, "You win! Scissor beats paper"];
                return result;
            case "rock":
                result = [1, "You lost! Rock beats scissor"];
                return result;
        }
    }
};

function rounds(gameResult) {
    let divResult = document.querySelector("#result");
    let item = document.createElement("p");
    if (gameResult === "Ties") {
        item.textContent = "Ties";
        divResult.appendChild(item);
    }
    else if (gameResult[0] === 2) {
        userScore++;
        item.textContent = gameResult[1];
        divResult.appendChild(item);
    }
    else {
        pcScore++;
        item.textContent = gameResult[1];
        divResult.appendChild(item);
    }
 
    if (userScore === 5 || pcScore === 5) {
        if (userScore > pcScore) {
            item.textContent = "You Win FINAL!";
            divResult.appendChild(item);
        }
        else {
            item.textContent = "PC Beats You FINAL";
            divResult.appendChild(item);
        }
    }
}

let buttons = document.querySelectorAll(".selection");
let userScore = 0;
let pcScore = 0;
let currentScore = document.createElement("div");

buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
        if(userScore < 5 && pcScore < 5){
        let userIn = event.target.textContent;
        let computerIn = getComputerChoise();
        let gameResult = game(userIn, computerIn);        
            rounds(gameResult);
            currentScore.innerHTML = `<h2> ${userScore} </h2> </hr> <h2> ${pcScore} </h2>`;
            document.querySelector("#result").appendChild(currentScore);
        }       
    });
});
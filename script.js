'use strict'

let pScore = 0;
let cScore = 0;
let info = document.getElementById('info');
let elementPscore = document.getElementById('pscore');
let elementCscore = document.getElementById('cscore');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let output = document.getElementById('info-text');
let computerPlayed = document.getElementById('computer');
let playerSelection;
let btnReset = document.getElementById('reset');

function animationRock() {
    rock.classList.remove('animation')
    setTimeout(() => {
        rock.classList.add('animation');
    }, 5);

}
function animationPaper() {
    paper.classList.remove('animation2')
    setTimeout(() => {
        paper.classList.add('animation2');
    }, 5);

}
function animationScissor() {
    scissor.classList.remove('animation3')
    setTimeout(() => {
        scissor.classList.add('animation3');
    }, 5);

}
rock.addEventListener('click', (e) => {
    animationRock();

    playerSelection = 'rock';
    if (pScore < 5 && cScore < 5) {
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } else {
        if (pScore == 5) {
            output.textContent = "End of Game - Congratulation You Win";
            info.style.backgroundColor = '#5DFF75'
        } else {
            output.textContent = "End of Game - You Lose!";
            info.style.backgroundColor = '#FF978C'
        }
    }

}, false)
paper.addEventListener('click', (e) => {
    animationPaper();

    playerSelection = 'paper';
    if (pScore < 5 && cScore < 5) {
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } else {
        if (pScore == 5) {
            output.textContent = "End of Game - Congratulation You Win";
            info.style.backgroundColor = '#5DFF75'
        } else {
            output.textContent = "End of Game - You Lose!";
            info.style.backgroundColor = '#FF978C'
        }
    }

}, false)
scissor.addEventListener('click', (e) => {
    animationScissor();

    playerSelection = 'scissor';
    if (pScore < 5 && cScore < 5) {
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } else {
        if (pScore == 5) {
            output.textContent = "End of Game - Congratulation You Win";
            info.style.backgroundColor = '#5DFF75'
        } else {
            output.textContent = "End of Game - You Lose!";
            info.style.backgroundColor = '#FF978C'
        }
    }

}, false)
function computerPlay() {
    let ran = Math.floor((Math.random() * 3) + 1);

    let rpc = ["rock", "paper", "scissor"];

    switch (ran) {
        case 1:
            computerPlayed.innerHTML = "Computer <i class='far fa-hand-rock'></i>";
            return rpc[0];

        case 2:
            computerPlayed.innerHTML = "Computer <i class='far fa-hand-paper'></i>";
            return rpc[1];
        case 3:
            computerPlayed.innerHTML = "Computer <i class='far fa-hand-scissors'></i>";
            return rpc[2];
    }

}
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                output.textContent = "Even! Nobody wins";
            } else if (computerSelection == "paper") {
                output.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
                cScore += 1;
                elementCscore.textContent = cScore;
            } else if (computerSelection == "scissor") {
                output.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
                pScore += 1;
                elementPscore.textContent = pScore;
            }
            break;
        case "paper":
            if (computerSelection == "paper") {
                output.textContent = "Even! Nobody wins"
            } else if (computerSelection == "scissor") {
                output.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
                cScore += 1;
                elementCscore.textContent = cScore;
            } else if (computerSelection == "rock") {
                output.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
                pScore += 1;
                elementPscore.textContent = pScore;
            }
            break;
        case "scissor":
            if (computerSelection == "scissor") {
                output.textContent = "Even! Nobody wins"
            } else if (computerSelection == "rock") {
                output.textContent = "You Lose! " + computerSelection + " beats " + playerSelection
                cScore += 1;
                elementCscore.textContent = cScore;
            } else if (computerSelection == "paper") {
                output.textContent = "You Win! " + playerSelection + " beats " + computerSelection
                pScore += 1;
                elementPscore.textContent = pScore;
            }
            break;
    }
}


reset.addEventListener('click', ()=>{
    cScore = 0;
    pScore = 0;
    elementPscore.textContent = "0";
    elementCscore.textContent = "0";
    computerPlayed.innerHTML = "Computer";
    output.textContent = "";
    info.style.backgroundColor = 'lightblue';
},false);
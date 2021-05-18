'use strict'

let pScore = 0;
let cScore = 0;

//init DOM-Elements
let info = document.getElementById('info');
let elementPscore = document.getElementById('pscore');
let elementCscore = document.getElementById('cscore');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let output = document.getElementById('info-text');
let computerPlayed = document.getElementById('computer');
let btnReset = document.getElementById('reset');


function animateElement(item) {
    item.classList.remove('animation')
    setTimeout(() => {
        item.classList.add('animation');
    }, 5);
}

function gameController() {
    if (pScore >= 5 || cScore >= 5) {
        if (pScore > cScore) {
            output.textContent = 'You Won!';
            info.style.backgroundColor = '#00ff00';
            setTimeout(() => {
                resetAll()
            }, 1000);
        }
        if (pScore < cScore) {
            output.textContent = 'You Lose!';
            info.style.backgroundColor = '#ff0000';
            setTimeout(() => {
                resetAll()
            }, 1000);
        }
        if (pScore === cScore) {
            output.textContent = 'Even, Nobody wins!';
            info.style.backgroundColor = '#0000ff';
            setTimeout(() => {
                resetAll()
            }, 1000);
        }
    }

}

rock.addEventListener('click', () => {
    animateElement(rock);
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    showComputerPlay(computerSelection);
    playRound(playerSelection, computerSelection);
    gameController();

})
paper.addEventListener('click', () => {
    animateElement(paper);
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    showComputerPlay(computerSelection);
    playRound(playerSelection, computerSelection);
    gameController();
})
scissor.addEventListener('click', () => {
    animateElement(scissor);
    let playerSelection = 'scissor';
    let computerSelection = computerPlay();
    showComputerPlay(computerSelection);
    playRound(playerSelection, computerSelection);
    gameController();
})

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) return 'rock';
    if (random === 1) return 'paper';
    if (random === 2) return 'scissor';
}
function showComputerPlay(selection) {
    if (selection === 'scissor') {
        computerPlayed.innerHTML = 'Computer <i class="far fa-hand-scissors"></i>'
    }else if(selection === 'rock'){
        computerPlayed.innerHTML = 'Computer <i class="far fa-hand-rock"></i>'
    }else if(selection === 'paper'){
        computerPlayed.innerHTML = 'Computer <i class="far fa-hand-paper"></i>'
    }
}


function winInfo(playerSelection, computerSelection) {
    output.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    pScore += 1;
    elementPscore.textContent = pScore;
}
function loseInfo(playerSelection, computerSelection) {
    output.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    cScore += 1;
    elementCscore.textContent = cScore;
}
function evenInfo() {
    output.textContent = "Even! Nobody wins";
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissor') { winInfo(playerSelection, computerSelection) };
        if (computerSelection === 'rock') { evenInfo() };
        if (computerSelection === 'paper') { loseInfo(playerSelection, computerSelection) };
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissor') { loseInfo(playerSelection, computerSelection) };
        if (computerSelection === 'rock') { winInfo(playerSelection, computerSelection) };
        if (computerSelection === 'paper') { evenInfo() };
    }
    if (playerSelection === 'scissor') {
        if (computerSelection === 'scissor') { evenInfo() };
        if (computerSelection === 'rock') { loseInfo(playerSelection, computerSelection) };
        if (computerSelection === 'paper') { winInfo(playerSelection, computerSelection) };
    }
}

reset.addEventListener('click', () => {
    resetAll()
});

function resetAll() {
    cScore = 0;
    pScore = 0;
    elementPscore.textContent = "0";
    elementCscore.textContent = "0";
    computerPlayed.innerHTML = "Computer";
    output.textContent = "";
    info.style.backgroundColor = 'lightblue';
}
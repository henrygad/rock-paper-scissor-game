const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorBtn = document.getElementById('scissor-btn')
const restartBtn = document.getElementById('restart-btn')
const autoPlayBtn = document.getElementById('auto-play-btn')
let displayGameResult = document.getElementById('display-game-result')
let displayGamePlayers = document.getElementById('display-game-players')
let displayGameId = document.getElementById('display-game-id')
let autoPlay = false
let returnId;
let gameId = {
    wins: 0,
    losses: 0,
    ties: 0
}

rockBtn.addEventListener('click', () =>{
    playGame('Rock')
})

paperBtn.addEventListener('click', () =>{
    playGame('Paper')
})

scissorBtn.addEventListener('click', () =>{
    playGame('Scissor')
})

restartBtn.addEventListener('click', () => { 
    gameId.wins = 0
    gameId.losses = 0
    gameId.ties = 0 
    gameResult = ''
    playerMove = '' 
    ramdomNum = ''
    displayGame(gameId, gameResult, playerMove, ramdomNum) 
    displayGamePlayers.innerHTML = ''   
})


autoPlayBtn.addEventListener('click', () => {
    if(autoPlay === false){
        returnId = setInterval(() => { 
            let play ;
            const computerMove1 = computerMove()
            if(computerMove1 === 1) {
                 play = 'Rock' 
            } else if(computerMove1 === 2) {
                 play = 'Paper'
            } else if(computerMove1 === 3) {
                play = 'Scissor'
            }
            playGame(play)
       }, 1000)  
       autoPlay = true

    } else{
        clearInterval(returnId)
        autoPlay = false
    }
   
})

 
function playGame(/* player game played */playerMove) { 
    let computerMove2 = computerMove()
    let gameResult = ''
  
    if(/* for rock */ playerMove === 'Rock' ) {
        if(computerMove2 === 1) {
            gameResult = 'Tie'
            computerMove2 = 'Rock'
        } else if(computerMove2 === 2) {
            gameResult = 'Lose'
            computerMove2 = 'Paper'
        } else if(computerMove2 === 3) {
             gameResult = 'Win'
             computerMove2 = 'Scissor'
        }
        
        } else if(/* for paper */ playerMove === 'Paper' ) {
            if(computerMove2 === 1) {
                gameResult = 'Win'
                computerMove2 = 'Rock'
            } else if(computerMove2 === 2) {
                gameResult = 'Tie'
                computerMove2 = 'Paper'
            } else if(computerMove2 === 3) {
                 gameResult = 'Lose'
                 computerMove2 = 'Scissor'
            }   
       
       
        } else if(/* for scissor */ playerMove === 'Scissor' ) {
            if(computerMove2 === 1) {
                gameResult = 'Lose'
                computerMove2 = 'Rock'
            } else if(computerMove2 === 2) {
                gameResult = 'Win'
                computerMove2 = 'Paper'
            } else if(computerMove2 === 3) {
                 gameResult = 'Tie'
                 computerMove2 = 'Scissor'
            }    
        }

        if(gameResult === 'Win') {
            gameId.wins++
        } else if(gameResult === 'Lose') {
            gameId.losses++
        } else if(gameResult === 'Tie') {
            gameId.ties++
        }

        displayGame(gameId, gameResult, playerMove, computerMove2)
}

function displayGame(D, A, B, C){
    displayGameResult.innerHTML =  `You: ${A}`
    displayGamePlayers.innerHTML =  `
    You picked:
    <img class="move-icon" src="images/${B}-emoji.png" alt="">
    <img class="move-icon" src="images/${C}-emoji.png" alt="">
    :Computer
    `
    displayGameId.innerHTML = `Wins: ${D.wins}, Losses: ${D.losses}, Ties: ${D.ties}`
}

function computerMove(/* computer game played */) {
    let computerMove2 = Math.floor(Math.random() * 3) + 1
     return computerMove2;

}
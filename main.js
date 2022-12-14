var player1 = new Player(1,"🐶")
var player2 = new Player(2,"🐱")
var game = new Game(player1,player2)
var placeSound = new Audio("./assets/jump_01.wav")

var bannerText = document.querySelector(".banner-text")
var grid = document.querySelectorAll(".grid")
var player1Wins = document.querySelector(".player1-wins")
var player2Wins = document.querySelector(".player2-wins")

window.addEventListener('load', function(){
    if(localStorage.length !== 0){
        retrieveWins()
    }
    updateWins()
    updateBanner(game.gameState)
})

for (var i = 0; i<grid.length;i++) {
    grid[i].addEventListener('click', function(){
        if(game.checkBoardAvailability()){
            updateGrid()
            game.checkForWin()
            game.checkForDraw()
            game.changeTurn()
            updateBanner(game.gameState)
            updateWins()
            storeWins()
            placeSound.play()
        }
        if(game.gameState !== "continue" && game.gameState !== "waiting"){
            game.gameState = "waiting"
            updateGrid()
            setTimeout(function(){
                game.resetGame()
                game.gameState = "continue"
                updateGrid()
                updateBanner(game.gameState)
            }, 2000);
        }
    })
}

function updateGrid(){
    for (var i = 0; i<game.gameBoard.length;i++){
        grid[i].innerText = game.gameBoard[i]
        if (grid[i].innerText !== "" || game.gameState === "waiting"){
            grid[i].classList.add("no-hover")
        } else {
            grid[i].classList.remove("no-hover")
        }
    }
}

function updateWins(){
    player1Wins.innerText = `${game.player1.wins} wins`
    player2Wins.innerText = `${game.player2.wins} wins`
}

function updateBanner(gameState){
    if(gameState === "continue"){
        bannerText.innerText = `It's ${game[game.turn].token}'s turn!`
    } else if(gameState === "draw"){
        bannerText.innerText = `It's a draw!`
    } else {
        bannerText.innerText = `${game.winner} won!`  
    }
}

function storeWins() {
    localStorage.setItem('player1Wins', game.player1.wins)
    localStorage.setItem('player2Wins', game.player2.wins)
  }

function retrieveWins(){
    game.player1.wins = localStorage.getItem('player1Wins')
    game.player2.wins = localStorage.getItem('player2Wins')
}

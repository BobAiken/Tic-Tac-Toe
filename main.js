var player1 = new Player(1,"🐶")
var player2 = new Player(2,"🐱")
var game = new Game(player1,player2)

var bannerText = document.querySelector(".banner-text")
var grid = document.querySelectorAll(".grid")
var player1Wins = document.querySelector(".player1-wins")
var player2Wins = document.querySelector(".player2-wins")

window.addEventListener('load', function(){
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
        }
        if(game.gameState !== "continue"){
            var myTimeout = setTimeout(function(){
                game.resetGame()
                updateBanner(game.gameState)
            }, 5000);
        }
    })
}


function updateGrid(){
    for (var i = 0; i<game.gameBoard.length;i++){
        grid[i].innerText = game.gameBoard[i]
    }
}

function updateWins(){
    player1Wins.innerText = `${game.player1.wins} wins`
    player2Wins.innerText = `${game.player2.wins} wins`
}

function updateBanner(gameState){
    if(gameState === "continue"){
        bannerText.innerText = `It is ${game[game.turn].token}'s turn!`
    } else if(gameState === "draw"){
        bannerText.innerText = `It's a draw!`
    } else {
        bannerText.innerText = `${game.winner} won!`  
    }
}




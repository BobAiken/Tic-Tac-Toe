var player1 = new Player(1,"🐶")
var player2 = new Player(2,"🐱")
var game = new Game(player1,player2)

var banner = document.querySelector(".banner")
var grid = document.querySelectorAll(".grid")
var player1Wins = document.querySelector(".player1-wins")
var player2Wins = document.querySelector(".player2-wins")

window.addEventListener('load',updateWins)

for (var i = 0; i<grid.length;i++) {
    grid[i].addEventListener('click', function(){
        if(game.checkBoardAvailability()){
            updateGrid()
            game.checkForWin()
            updateWins()
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

function updateBanner(){
    banner.innerText
}

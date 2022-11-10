var player1 = new Player(1,"🐶")
var player2 = new Player(2,"🐱")
var game = new Game(player1,player2)

var banner = document.querySelector(".banner")
var grid = document.querySelectorAll(".grid")


for (var i = 0; i<grid.length;i++) {
    grid[i].addEventListener('click', function(){
        if(game.checkBoardAvailability()){
            updateGrid()
            game.checkForWin()
        }
    })
}


function updateGrid(){
    console.log("updateGrid")
    for (var i = 0; i<game.gameBoard.length;i++){
        grid[i].innerText = game.gameBoard[i]
    }
}

function updateWins(){

}

function updateBanner(){
    banner.innerText
}

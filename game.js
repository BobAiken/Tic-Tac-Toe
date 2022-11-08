class Game{
    constructor(player1,player2){
        this.player1 = player1
        this.player2 = player2
        this.gameBoard = ["","","","","","","","",""]
        this.turn = "player1"
    }
    checkForWin(player){
        if (this.gameBoard[0] === this.player.token && this.gameBoard[1] === this.player.token && this.gameBoard[2] === this.player.token){
            this.player.increaseWins()
            //change banner.innerText to display payer 1 or player 2 has won
        } else if (this.gameBoard[3] === this.player.token && this.gameBoard[4] === this.player.token && this.gameBoard[5] === this.player.token){
            this.player.increaseWins()
            //change banner.innerText to display payer 1 or player 2 has won
        } else if (this.gameBoard[6] === this.player.token && this.gameBoard[7] === this.player.token && this.gameBoard[8] === this.player.token){
            this.player.increaseWins()
            //change banner.innerText to display payer 1 or player 2 has won
        } else if (this.gameBoard[0] === this.player.token && this.gameBoard[3] === this.player.token && this.gameBoard[6] === this.player.token){
            this.player.increaseWins()
            //change banner.innerText to display payer 1 or player 2 has won
        } else if (this.gameBoard[1] === this.player.token && this.gameBoard[4] === this.player.token && this.gameBoard[7] === this.player.token){
            this.player.increaseWins()
            //change banner.innerText to display payer 1 or player 2 has won
        } else if (this.gameBoard[2] === this.player.token && this.gameBoard[5] === this.player.token && this.gameBoard[8] === this.player.token){
            this.player.increaseWins()
            //change banner.innerText to display payer 1 or player 2 has won
        } else if (this.gameBoard[2] === this.player.token && this.gameBoard[4] === this.player.token && this.gameBoard[6] === this.player.token){
            this.player.increaseWins()
            //change banner.innerText to display payer 1 or player 2 has won
        } else if (this.gameBoard[0] === this.player.token && this.gameBoard[4] === this.player.token && this.gameBoard[8] === this.player.token){
            this.player.increaseWins()
            //change banner.innerText to display payer 1 or player 2 has won
        }
    }
    checkForDraw(){
        for (var i = 0;i<this.gameBoard.length;i++){
            if(this.gameBoard[i] === ""){
                //do nothing because there are still empty spaces
            } else {
                //change banner.innerText to declare a draw
            }
        }
    }
    resetGame(startingPlayer){
        this.gameBoard = ["","","","","","","","",""]
        this.turn = startingPlayer
    }
}
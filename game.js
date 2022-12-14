class Game{
    constructor(player1,player2){
        this.player1 = player1
        this.player2 = player2
        this.gameBoard = ["","","",
                        "","","",
                        "","",""]
        this.turn = "player1"
        this.startingPlayer = "player1"
        this.gameState = "continue"
        this.winner = ""
    }
    checkForWin(){
        if (this.gameBoard[0] === this[this.turn].token && this.gameBoard[1] === this[this.turn].token && this.gameBoard[2] === this[this.turn].token ||
            this.gameBoard[3] === this[this.turn].token && this.gameBoard[4] === this[this.turn].token && this.gameBoard[5] === this[this.turn].token ||
            this.gameBoard[6] === this[this.turn].token && this.gameBoard[7] === this[this.turn].token && this.gameBoard[8] === this[this.turn].token ||
            this.gameBoard[0] === this[this.turn].token && this.gameBoard[3] === this[this.turn].token && this.gameBoard[6] === this[this.turn].token ||
            this.gameBoard[1] === this[this.turn].token && this.gameBoard[4] === this[this.turn].token && this.gameBoard[7] === this[this.turn].token ||
            this.gameBoard[2] === this[this.turn].token && this.gameBoard[5] === this[this.turn].token && this.gameBoard[8] === this[this.turn].token ||
            this.gameBoard[2] === this[this.turn].token && this.gameBoard[4] === this[this.turn].token && this.gameBoard[6] === this[this.turn].token ||
            this.gameBoard[0] === this[this.turn].token && this.gameBoard[4] === this[this.turn].token && this.gameBoard[8] === this[this.turn].token) {
                this[this.turn].increaseWins()
                this.winner = this[this.turn].token
                this.gameState = "winner"
        }
    }
    checkForDraw(){
        for (var i = 0;i<this.gameBoard.length;i++){
            if(this.gameBoard[i] === "" || this.gameState === "winner"){
                return
            }
        }
        this.gameState = "draw"
    }
    resetGame(){
        this.gameBoard = ["","","","","","","","",""]
        if(this.startingPlayer === "player1"){
            this.startingPlayer = "player2"
        } else {
            this.startingPlayer = "player1"
        }
        this.turn = this.startingPlayer
    }
    changeTurn(){
        if(this.turn === "player1"){
            this.turn = "player2"
        } else {
            this.turn = "player1"
        }
        return
    }
    checkBoardAvailability(){
        var position = Number(event.target.id[4])
        if (this.gameBoard[position] === "" && this.gameState === "continue"){
            this.gameBoard[position] = this[this.turn].token
            return true
        }
        return false
    }
}
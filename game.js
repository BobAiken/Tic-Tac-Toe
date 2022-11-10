class Game{
    constructor(player1,player2){
        this.player1 = player1
        this.player2 = player2
        this.gameBoard = ["","","","","","","","",""]
        this.turn = "player1"
        this.startingPlayer = "player1"
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
                console.log("checkForWin, wonner")
                this[this.turn].increaseWins()
                banner.innerText = `${this[this.turn].token} has won!`
                this.resetGame()
                return
        }
        console.log("check for win, winn't")
        this.checkForDraw()
    }
    checkForDraw(){
        for (var i = 0;i<this.gameBoard.length;i++){
            if(this.gameBoard[i] === ""){
                console.log("No draw")
                this.changeTurn()
                return 
            }
        }
        console.log("a draw has occured")
        banner.innerText = `Draw`
        this.resetGame()
        return
    }
    resetGame(){
        this.gameBoard = ["","","","","","","","",""]
        if(this.startingPlayer === "player1"){
            this.startingPlayer = "player2"
        } else {
            this.startingPlayer = "player1"
        }
        console.log("starting player has been set to",this.startingPlayer)
        this.turn = this.startingPlayer
        console.log("this.turn has been set to starting player, which is" ,this.turn)
        updateGrid()
    }
    changeTurn(){
        console.log("the turn has changed")
        if(this.turn === "player1"){
            this.turn = "player2"
        } else {
            this.turn = "player1"
        } 
        return
    }
    checkBoardAvailability(){
        console.log("the board is being checked")
        var position = Number(event.target.id[4])
        if (event.target.innerText === ""){
            this.gameBoard[position] = this[this.turn].token
            return true
        }
        return false
    }
}
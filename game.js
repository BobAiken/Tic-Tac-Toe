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
            this[this.turn].increaseWins()
            banner.innerText = `${this[this.turn].token} has won!`
            return true
        }
        // if (this.gameBoard[0] === this[this.turn].token && this.gameBoard[1] === this[this.turn].token && this.gameBoard[2] === this[this.turn].token){
        //     this[this.turn].increaseWins()
        //     banner.innerText = `${this[this.turn].token} has won!`
        //     return true
        // } else if (this.gameBoard[3] === this[this.turn].token && this.gameBoard[4] === this[this.turn].token && this.gameBoard[5] === this[this.turn].token){
        //     this[this.turn].increaseWins()
        //     banner.innerText = `${this[this.turn].token} has won!`
        //     return true
        // } else if (this.gameBoard[6] === this[this.turn].token && this.gameBoard[7] === this[this.turn].token && this.gameBoard[8] === this[this.turn].token){
        //     this[this.turn].increaseWins()
        //     banner.innerText = `${this[this.turn].token} has won!`
        //     return true
        // } else if (this.gameBoard[0] === this[this.turn].token && this.gameBoard[3] === this[this.turn].token && this.gameBoard[6] === this[this.turn].token){
        //     this[this.turn].increaseWins()
        //     banner.innerText = `${this[this.turn].token} has won!`
        //     return true
        // } else if (this.gameBoard[1] === this[this.turn].token && this.gameBoard[4] === this[this.turn].token && this.gameBoard[7] === this[this.turn].token){
        //     this[this.turn].increaseWins()
        //     banner.innerText = `${this[this.turn].token} has won!`
        //     return true
        // } else if (this.gameBoard[2] === this[this.turn].token && this.gameBoard[5] === this[this.turn].token && this.gameBoard[8] === this[this.turn].token){
        //     this[this.turn].increaseWins()
        //     banner.innerText = `${this[this.turn].token} has won!`
        //     return true
        // } else if (this.gameBoard[2] === this[this.turn].token && this.gameBoard[4] === this[this.turn].token && this.gameBoard[6] === this[this.turn].token){
        //     this[this.turn].increaseWins()
        //     banner.innerText = `${this[this.turn].token} has won!`
        //     return true
        // } else if (this.gameBoard[0] === this[this.turn].token && this.gameBoard[4] === this[this.turn].token && this.gameBoard[8] === this[this.turn].token){
        //     this[this.turn].increaseWins()
        //     banner.innerText = `${this[this.turn].token} has won!`
        //     return true
        // }
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
    }
}
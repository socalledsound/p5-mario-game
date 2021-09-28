class Scoreboard{
    constructor(){
        this.score = 0
    }

    render(){
        fill(255)
        stroke(255)
        textSize(gameSettings.textSize)
        text('score : ', gameSettings.textSize, gameSettings.textSize  + 10)
        text(this.score, gameSettings.textSize  * 4.5, gameSettings.textSize  + 10)
    }

    update(newScore){
        this.score = newScore
    }

}
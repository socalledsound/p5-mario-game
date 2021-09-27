class Overlay{
    constructor(text1, text2, startButton){
        this.text1 = text1 
        this. text2  =text2
        this.startButton = startButton 
        this.startButton.position(gameSettings.overlayX + 190, gameSettings.overlayY + 150)
    }
    render(){
        strokeWeight(0)
        fill(gameSettings.overlayColor)
        rect(gameSettings.overlayX, gameSettings.overlayY, gameSettings.overlayWidth, gameSettings.overlayHeight)
        fill(0)
        stroke(0)
        textSize(gameSettings.textSize)
        text(this.text1, gameSettings.overlayX + 130, gameSettings.overlayY + 50)
        text(this.text2, gameSettings.overlayX + 80, gameSettings.overlayY + 100 )
    }
}
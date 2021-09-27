class Background{

    render(){
        background(gameSettings.skyColor)
        fill(gameSettings.groundColor)
        // this is the ground
        rect(0, gameSettings.groundLevel, gameSettings.canvasWidth, gameSettings.canvasHeight - gameSettings.groundLevel)
    }
}
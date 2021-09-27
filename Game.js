class Game {
    constructor(images, sounds){
        this.images = images
        this.sounds = sounds
        this.marioImages = loadMarioImages(this.images.marioImg)
        this.coinImages = loadCoinImages(this.images.objectsImg)
        this.numCoins = gameSettings.numCoins
        this.started = false
        this.over = false
        this.hero = new Mario(this.marioImages, {x: gameSettings.heroStartX, y: gameSettings.heroStartY}, gameSettings.heroSize)
        this.coins = Array.from({ length: gameSettings.numCoins}, (el, i) => {
            return new Coin(this.coinImages, { x: gameSettings.coinSize + gameSettings.coinSize * i, y: gameSettings.coinLevel }, gameSettings.coinSize)
        })
        this.background = new Background()
        this.scoreboard = new Scoreboard()
        this.startButton = createButton('start')
        this.startButton.mousePressed(this.init)
        this.startScreen = new Overlay(`hi let's play mario`, 'use arrow buttons to move', this.startButton)
        this.gameOverScreen = new Overlay('game over!', 'start again?', this.startButton)
   
    }

    init = () => {
        if(!this.started){
            this.coins = Array.from({ length: gameSettings.numCoins}, (el, i) => {
                return new Coin(this.coinImages, { x: gameSettings.coinSize + gameSettings.coinSize * i, y: gameSettings.coinLevel }, gameSettings.coinSize)
            })
            this.hero = new Mario(this.marioImages, this.sounds.jumpSound, {x: gameSettings.heroStartX, y: gameSettings.heroStartY}, gameSettings.heroSize)
            this.started = true
            this.startButton.hide()
            this.sounds.themeSong.play()
        }

    }


    render(){
        this.background.render()
        this.scoreboard.render()
        this.coins.forEach(coin => coin.render())
        if(this.hero){
             this.hero.render()
        }
        if(!this.started && !this.over){
            this.startScreen.render()
        }
        if(this.over){
            this.gameOverScreen.render()
        }
    }

    update(){
        // game over state
        if(this.started && !this.over){
            this.hero.update()
            this.coins.forEach(coin => coin.update())
        }
    }
}




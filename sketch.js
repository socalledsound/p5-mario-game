let objectImg, marioImg, goombaImg
let images 
let themeSong, jumpSound, coinSound
let sounds 
let game


function preload(){
    objectsImg = loadImage('assets/items-objects.png')
    marioImg = loadImage('assets/mario-use.png')
    goombaImg = loadImage('assets/goombas.png')
    themeSong = loadSound('assets/sounds/Mario-theme-song.mp3'), 
    coinSound = loadSound('assets/sounds/Mario-coin-sound.mp3'),
    jumpSound = loadSound('assets/sounds/Mario-jump-sound.mp3'),
    dieSound = loadSound('assets/sounds/mario-dies.mp3')

    images = {
        objectsImg,
        marioImg, 
        goombaImg
    }

    sounds = {
        themeSong, 
        jumpSound, 
        coinSound,
    }
}

function setup(){
    createCanvas(1000, 600)
    background(95, 138, 245)
    frameRate(15)
    game = new Game(images, sounds)

}

function draw(){
    checkKeys()
    game.update()
    game.render()    
}

function checkKeys(){
    if(keyIsDown(UP_ARROW)){
        game.hero.jump()
        return
    } else if(keyIsDown(LEFT_ARROW)){
        game.hero.runLeft()
        return
    } else if(keyIsDown(RIGHT_ARROW)){
        game.hero.runRight()
        return
    }
}

function keyReleased(){
    if(keyCode === UP_ARROW){
        game.hero.clearJump()
    }
}


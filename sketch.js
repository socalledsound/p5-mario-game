const numCoins = 100

const coins = Array.from({ length: numCoins}, (el, i) => {
    return new Coin({ x: 20 * i, y: 100 }, 20)
})


function preload(){
    objectsImg = loadImage('assets/items-objects.png')
    marioImg = loadImage('assets/mario-use.png')
}

function setup(){
    createCanvas(1000, 600)
    background(95, 138, 245)
    frameRate(15)

    // assign images
    coins.forEach( coin => coin.images = loadCoinImages(objectsImg))

}

function draw(){
    background(95, 138, 245)
    fill(110, 59, 21)
    // this is the ground
    rect(0, 400, 1000, 200)

    // draw the coins
    coins.forEach(coin => coin.render())
}


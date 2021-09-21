

function preload(){
    objectsImg = loadImage('assets/items-objects.png')
    marioImg = loadImage('assets/mario-use.png')
}

function setup(){
    createCanvas(1000, 600)
    background(95, 138, 245)
    frameRate(15)

}

function draw(){
    background(95, 138, 245)
    fill(110, 59, 21)
    rect(0, 400, 1000, 200)
}


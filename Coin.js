class Coin {
    constructor(images, sound, {x, y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.images = images
        this.imageCounter = 0
        this.speed = Math.random() * 0.5
        this.collected = false
        this.boundingbox = new BoundingBox(this.x, this.y, this.size)
        this.sound = sound
    }


    playSound(){
        this.sound.play()
    }

    render(){
        
        if(!this.collected){
            // this.boundingbox.update(this.x, this.y)
            // this.boundingbox.render()
            image(this.images[Math.floor(this.imageCounter)], this.x, this.y, this.size, this.size)
        } 
    }

    update(){
       if(this.imageCounter < this.images.length - 1){
           this.imageCounter += this.speed
        } else {
            this.imageCounter = 0
        } 

    }
}


// 

// image(coins[coinCounter], 400, 200, 100, 100)

// image(coins[coinCounter], 600, 200, 100, 100)

// image(coins[coinCounter], 800, 200, 100, 100)

// if(coinCounter < coins.length - 1){
//     coinCounter++
// }else{
//     coinCounter = 0
// }
class Coin {
    constructor({x, y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.images = []
        this.imageCounter = 0
    }

    render(){
        image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
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
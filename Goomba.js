class Goomba {
    constructor(images, {x, y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.images = images
        this.imageCounter = 1
        this.defeated = false
        this.disabled = false
    }

    die(){
        this.imageCounter = 0  
        this.disabled = true
        setTimeout(this.setDefeated, 500)
    }

    setDefeated = () => {
        this.defeated = true
    }

    render(){
        if(!this.defeated){
            image(this.images[this.imageCounter], this.x, this.y, this.size * 0.5, this.size)
        }
    }

    update(){
        if(Math.random() > 0.1){
            this.x --
            if(this.imageCounter === 1){
                this.imageCounter = 2
            } else {
                this.imageCounter = 1
            }
        }

    }
}
class BoundingBox {
    constructor(x, y, size){
        this.x = x
        this.y = y
        this.size = size
        this.fillColor = gameSettings.boundingBoxFillColor
        this.strokeColor = gameSettings.boundingBoxStrokeColor
        this.strokeWeight= gameSettings.boundingBoxStrokeWeight
    }

    render(){
        fill(this.fillColor)
        stroke(this.strokeColor)
        strokeWeight(this.strokeWeight)
        rect(this.x, this.y, this.size, this.size)
    }

    update(x, y){
        this.x = x
        this.y= y
    }
}
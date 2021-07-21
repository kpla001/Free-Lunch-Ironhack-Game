class Component {
    constructor(classGame, x, y, width, height, imageSrc) {
        this.game = classGame;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = imageSrc;
    }

    drawComponent() {
        this.game.context.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

}
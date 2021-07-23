class Component {
    constructor(classGame, x, y, width, height, imageSrc) {
        this.game = classGame;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    drawComponent() {
        this.game.context.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    trashDidCollide(otherComponent) {
        if (
            otherComponent.x + otherComponent.width - 25 < this.x ||
            otherComponent.y + 160 > this.y + this.height ||
            this.x + this.width - 25 < otherComponent.x ||
            otherComponent.y + otherComponent.height < this.y
        ) {
            return false;
        } else {
            return true;
        }
    }

    foodDidCollide(otherComponent) {
        if (
            otherComponent.x + otherComponent.width - 25 < this.x ||
            otherComponent.y + 140 > this.y + this.height ||
            this.x + this.width - 25 < otherComponent.x ||
            otherComponent.y + otherComponent.height < this.y
        ) {
            return false;
        } else {
            return true;
        }
    }
}

        
        /*
        this.trash.drawComponent();
        this.trash.y += 4;
        if (this.trash.y > this.canvas.height) {
        this.trash.y = 0;
        this.trash.x = Math.random() * (this.canvas.width - this.trash.width);
        }
        */
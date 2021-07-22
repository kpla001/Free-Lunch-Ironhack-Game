const alligatorImg = ".images/alligatorR.png"; // => this for formatting the player image
const lifeImg = ".images/life.png"; // => this for formatting the life avatars

class Game {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");  
        this.background = new Component(this, 0, 0, this.canvas.width, this.canvas.height, "./images/swamp.png")
        
        this.alligator = new Player(this, this.canvas.width/3, 500, 256, 256, "./images/alligatorR.png")
        this.score = 0;

        // Lives //
        this.livesLeft = [];
        this.alligator.lives.forEach((life) => {
            this.livesLeft.push(new Component(this, 105, 10, 83.335, 55.333, "./images/life.png"))
        });
        for (let i = 0; i < this.livesLeft.length; i++) {
            if(i === 0) {
                this.livesLeft[i].x += 0
            }
            else if(i === 1) {
                this.livesLeft[i].x += 90
            }
            else if(i === 2) {
                this.livesLeft[i].x += 180
            }
        };
    };
        ///////////
    

    start() {
        this.drawLoop();
        this.alligator.move();
       
        
    }

    drawScore() {
        this.context.fillStyle = "white";
        this.context.font = "28px Comic-sans";
        this.context.fillText(`Score: ${this.score}`, this.canvas.width/2.2, 50);
    }

    drawLivesText() {
        this.context.fillStyle = "white";
        this.context.font = "28px Comic-sans";
        this.context.fillText(`Lives:`, 30, 50);
    }

    drawLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.background.drawComponent();
        this.drawScore();
        this.alligator.drawComponent();

        this.drawLivesText();
        this.livesLeft.forEach((life) => {
           life.drawComponent();
        })

        window.requestAnimationFrame(() => this.drawLoop());
    }

    
}
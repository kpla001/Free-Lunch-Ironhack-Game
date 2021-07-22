var counter = 0;
const myTime = setInterval(startClock, 1000);
function startClock() {
   return counter += 1;
};

///////////////////////////////////////////////////////////////////////////////
const lifeImg = ".images/life.png"; // => this for formatting the life avatars
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Trash Images/////////////////////////////////

var trashImages = [     // this is used to spawn new trash images each time
    trashImage1, 
    trashImage2,
    trashImage3,
    trashImage4,
    trashImage5,
    trashImage6,
    trashImage7,
    trashImage8,
];

var trashObject = {
        trashImage: trashImages[pickRandom(trashImages)],
};

function pickRandom(array) {
    return Math.floor(Math.random() * array.length)
};
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
class Game {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");  
        this.background = new Component(this, 0, 0, this.canvas.width, this.canvas.height, "./images/swamp.png");
        this.alligator = new Player(this, this.canvas.width/3, 500, 256, 256, "./images/alligatorR.png");
        this.score = 0;

        this.myTrash = [];
        
        setInterval(() => {
            console.log(counter);
        }, 1000);
        
        setInterval(() => {
            console.log(this.myTrash);
        }, 1000);

        ////////////////////////////// Lives /////////////////////////////

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
        //////////////////////////////////////////////////////////////////
    

    start() {
        this.drawLoop();
        this.alligator.move();
        this.pushTrashLoop();
        
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

    pushTrashLoop() {
        setInterval(() => {
            if (counter % 3 === 0) {
            this.myTrash.shift()
            };
            if (counter % 3 === 0) {
            this.myTrash.push(new Component(this, Math.floor((Math.random() * this.canvas.width)), 0, 100, 120, trashImages[pickRandom(trashImages)].src));
            };
        },1000);
    }


    drawLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.background.drawComponent();
        this.drawScore();
        this.alligator.drawComponent();
        
        if (this.myTrash.length > 0) {
            this.myTrash[0].drawComponent();
            this.myTrash[0].y += 4;
        };
        
        
        /*
        this.trash.drawComponent();
        this.trash.y += 4;
        if (this.trash.y > this.canvas.height) {
        this.trash.y = 0;
        this.trash.x = Math.random() * (this.canvas.width - this.trash.width);
        }
        */

        this.drawLivesText();
        this.livesLeft.forEach((life) => {
            life.drawComponent();
        })

        window.requestAnimationFrame(() => this.drawLoop());
    }

    
}
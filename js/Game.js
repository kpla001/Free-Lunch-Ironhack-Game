var counter = 0;
const myTime = setInterval(startClock, 1000);
function startClock() {
   return counter += 1;
};

////////////////////////// Pick Random Function  ///////////////////////////////

function pickRandom(array) {
    return Math.floor(Math.random() * array.length)
};


//////////////////////////     Trash Images     ///////////////////////////////

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


//////////////////////////     Food Images     ///////////////////////////////

var foodImages = [     // this is used to spawn new food images each time
    foodImage1,
    foodImage2,
    foodImage3,
    foodImage4,
    foodImage5,
    foodImage6,
    foodImage7,
    foodImage8,
];


//////////////////////////////////////////////////////////////////////////////
class Game {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");  
        this.background = new Component(this, 0, 0, this.canvas.width, this.canvas.height, "./images/swamp.png");
        this.alligator = new Player(this, this.canvas.width/3, 500, 256, 256, "./images/alligatorR.png");
        this.score = 0;
        this.backgroundAudio = new Audio("./sounds/background-music.mp3");

        //////////////////////// Spawning Trash ///////////////////////////

        this.myTrash = [];

        
        // setInterval(() => {
        //     console.log(counter);
        // }, 1000);
        
        // setInterval(() => {
        //     console.log(this.myTrash);
        // }, 1000);


        /////////////////////// Spawning Food ////////////////////////////

        this.myFood = [];

        // setInterval(() => {
        //     console.log(this.myFood);
        // }, 1000);


        //////////////////////     Lives     /////////////////////////////

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
        this.pushFoodLoop();


        this.backgroundAudio.addEventListener("ended", () =>{
            this.backgroundAudio.play()
        }, false);
        this.backgroundAudio.play();
    }

    drawScore() {
        this.context.fillStyle = "white";
        this.context.font = "28px playbill-regular";
        this.context.fillText(`Score: ${this.score}`, this.canvas.width/2.2, 50);
    }

    drawLivesText() {
        this.context.fillStyle = "white";
        this.context.font = "28px playbill-regular";
        this.context.fillText(`Lives:`, 30, 50);
    }

    pushTrashLoop() {
        setInterval(() => {
            if (this.myTrash.length > 6) {
            this.myTrash.shift()
            };
            if (counter % 2 === 0) {
            this.myTrash.push(new Component(this, Math.floor((Math.random() * (this.canvas.width - 75))), 0, 100, 120, trashImages[pickRandom(trashImages)].src));
            };
        }, 600);
    }

    pushFoodLoop() {
        setInterval(() => {
            if (this.myFood.length > 4) {
                setTimeout(() => this.myFood.shift(), 300);
            };
            if (counter % 3 === 0) {
            this.myFood.push(new Component(this, Math.floor((Math.random() * (this.canvas.width - 75))), 0, 100, 120, foodImages[pickRandom(foodImages)].src));
            };
        }, 700);
    }


    drawLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.background.drawComponent();
        this.drawScore();
        this.alligator.drawComponent();
        
        ///////// Trash Loop ///////////
        if (this.myTrash.length > 0) {
            this.myTrash[0].drawComponent();
            this.myTrash[0].y += 6;
        };
        if (this.myTrash.length > 1) {
            this.myTrash[1].drawComponent();
            this.myTrash[1].y += 5;
        };
        if (this.myTrash.length > 2) {
            this.myTrash[2].drawComponent();
            this.myTrash[2].y += 4;
        };
        if (this.myTrash.length > 3) {
            this.myTrash[3].drawComponent();
            this.myTrash[3].y += 5;
        };
        if (this.myTrash[0] && this.myTrash[0].trashDidCollide(this.alligator)) {
            if (this.alligator.trashImmunity === false) {
                new Audio("./sounds/alligator-squelch.wav").play();
                this.livesLeft.pop();
                this.alligator.switchTrashImmunity();
                this.myTrash.splice(0,1);
                //this.context.clearRect(this.myTrash[0].x, this.myTrash[0].y, this.myTrash[0].width, this.myTrash[0].height);
            }
            if (this.livesLeft.length === 0){
                new Audio("./sounds/game-over.mp3").play();
            }
        };
        if (this.myTrash[1] && this.myTrash[1].trashDidCollide(this.alligator)) {
            if (this.alligator.trashImmunity === false) {
                new Audio("./sounds/alligator-squelch.wav").play();
                this.livesLeft.pop();
                this.alligator.switchTrashImmunity();
                this.myTrash.splice(1,1);
            }
            if (this.livesLeft.length === 0){
                new Audio("./sounds/game-over.mp3").play();
            }
        };
        if (this.myTrash[2] && this.myTrash[2].trashDidCollide(this.alligator)) {
                if (this.alligator.trashImmunity === false) {
                    new Audio("./sounds/alligator-squelch.wav").play();
                this.livesLeft.pop();
                this.alligator.switchTrashImmunity();
                this.myTrash.splice(2,1);
                };
                if (this.livesLeft.length === 0){
                    new Audio("./sounds/game-over.mp3").play();
                }
        };
        if (this.myTrash[3] && this.myTrash[3].trashDidCollide(this.alligator)) {
            if (this.alligator.trashImmunity === false) {
                new Audio("./sounds/alligator-squelch.wav").play();
            this.livesLeft.pop();
            this.alligator.switchTrashImmunity();
            this.myTrash.splice(3,1);
            };
            if (this.livesLeft.length === 0){
                new Audio("./sounds/game-over.mp3").play();
            }
    };

        /////////// Food Loop ////////////
        if (this.myFood.length > 0) {
            this.myFood[0].drawComponent();
            this.myFood[0].y += 5;
        };

        if (this.myFood[0] && this.myFood[0].foodDidCollide(this.alligator)) {
            if (this.alligator.foodImmunity === false) {
                new Audio("./sounds/munch.mp3").play();
                this.myFood.splice(0,1);
                this.score += 1;
                this.alligator.switchFoodImmunity();
            }
        };
        if (this.myFood.length > 1) {
            this.myFood[1].drawComponent();
            this.myFood[1].y += 5;
        }
        if (this.myFood[1] && this.myFood[1].foodDidCollide(this.alligator)) {
            if (this.alligator.foodImmunity === false) {
                new Audio("./sounds/munch.mp3").play();
                this.myFood.splice(1,1);
                this.score += 1;
                this.alligator.switchFoodImmunity();
            }
        };
        ////////////  Lives  ///////////////
        this.drawLivesText();
        this.livesLeft.forEach((life) => life.drawComponent())

        ////////////////////////////////////
        if (this.livesLeft.length <= 0) {
            this.gameOver();
        } else {
        window.requestAnimationFrame(() => this.drawLoop());
        };
    }

    gameOver() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.drawComponent();
        this.backgroundAudio.pause();

        const funnyAlligator = new Component(this, 123, 130, 750, 454, "./images/gameover.jpg");
        funnyAlligator.drawComponent();

        this.context.fillStyle = "white";
        this.context.font = "70px playbill-regular";
        this.context.fillText("GAME OVER", 300, 210)

        window.requestAnimationFrame(() => this.gameOver());
    }
    
}
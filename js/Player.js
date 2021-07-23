class Player extends Component {
    constructor(classGame,x, y, width, height, imageSrc) {
        super(classGame, x, y, width, height, imageSrc);
            
        this.immunity = false;
        this.lives = [1, 1, 1];
        
    }
    
    move() {
        document.addEventListener("keydown", (event) => {
        console.log(event.code)
            switch (event.code) {
                case "ArrowRight":
                case "KeyD":
                    if (this.x < 735) {
                        this.x += 40;
                        this.image.src = "./images/alligatorR.png";
                    }
                    break;

                case "ArrowLeft":
                case "KeyA":
                    if (this.x > 10) {
                        this.x -= 40;
                        this.image.src = "./images/alligatorL.png";
                    }
                    break;
                default:
                    console.log("Get a move on, gator!")
            }
            
        })

    }
    
    switchImmunity = () => {
        this.immunity = true;
        setTimeout( () => {
            this.immunity = false;
        }, 1000);
    };

}
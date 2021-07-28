class Player extends Component {
    constructor(classGame,x, y, width, height, imageSrc) {
        super(classGame, x, y, width, height, imageSrc);
            
        this.trashImmunity = false;
        this.foodImmunity = false;
        this.lives = [1, 1, 1];
        
    }
    
    move() {
        document.addEventListener("keydown", (event) => {
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
    
    switchTrashImmunity = () => {
        this.trashImmunity = true;
        setTimeout( () => {
            this.trashImmunity = false;
        }, 1000);
    };

    switchFoodImmunity = () => {
        this.foodImmunity = true;
        setTimeout( () => {
            this.foodImmunity = false;
        }, 800);
    };

}
class Player extends Component {
    constructor(classGame, x, y, width, height, imageSrc) {
        super(classGame, x, y, width, height, imageSrc);
            
        this.immunity = false;
        this.lives = [1, 1, 1];
        
    }
    
    move() {
       document.addEventListener("keydown", (event) => {
           console.log(event.code)
            switch (event.code) {
                case "ArrowRight":
                case "Key D":
                    if (this.x < 735) this.x += 40;
                    break;

                case "ArrowLeft":
                case "KeyA":
                    if (this.x > 10) this.x -= 40;
                    break;
                default:
                    console.log("Get a move on, gator!")
            }
        })

    }

}
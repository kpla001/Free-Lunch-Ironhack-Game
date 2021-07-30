const trashImage1 = new Image();
const trashImage2 = new Image();
const trashImage3 = new Image();
const trashImage4 = new Image();
const trashImage5 = new Image();
const trashImage6 = new Image();
const trashImage7 = new Image();
const trashImage8 = new Image();

trashImage1.src = "./Images/bananapeel.png";
trashImage2.src = "./Images/cardboard.png";
trashImage3.src = "./Images/chair.png";
trashImage4.src = "./Images/papertrash.png";
trashImage5.src = "./Images/tincan.png";
trashImage6.src = "./Images/tire.png";
trashImage7.src = "./Images/trashbag.png";
trashImage8.src = "./Images/wrapper.png";
/////////////////////////////////////////////////////////////////////////////

class Trash extends Component {
    constructor(classGame, x, y, width, height, imageSrc, context) {
        super(classGame, x, y, width, height, imageSrc)
        this.context = context;
        // this.trashArray = [];
        this.trash = new Image();
        this.trash.src = imageSrc;
    }

    drawTrash() {
            this.context.drawImage(this.trash, this.x, this.y, this.width, this.height)
        }

    // put in game class

    // addTrash() {
    //     for(let i = 0; i < trashType.length; i++) {
    //         const trashImage = new Image();
    //         trashImage.src = `./images/${trashType[i]}.png`
    //         this.trashArray.push({[`trashImage${i+1}`]: trashImage});
    //     }
    // }

    // drawTrash() {
    //     this.trashArray.forEach(trash => {
    //         this.context.drawImage(trash, )
    //     })
    // }
}
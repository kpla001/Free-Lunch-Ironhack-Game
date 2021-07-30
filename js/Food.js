const foodImage1 = new Image();
const foodImage2 = new Image();
const foodImage3 = new Image();
const foodImage4 = new Image();
const foodImage5 = new Image();
const foodImage6 = new Image();
const foodImage7 = new Image();
const foodImage8 = new Image();

foodImage1.src = "./Images/chicken.png";
foodImage2.src = "./Images/fries.png";
foodImage3.src = "./Images/hamburger.png";
foodImage4.src = "./Images/hotdog.png";
foodImage5.src = "./Images/jerky.png";
foodImage6.src = "./Images/pizza.png";
foodImage7.src = "./Images/sushi.png";
foodImage8.src = "./Images/taco.png";
////////////////////////////////////////////////////////////////

class Food extends Component {
    constructor(classGame, x, y, width, height, imageSrc) {
        super(classGame, x, y, width, height, imageSrc)
    }
}
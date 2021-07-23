var foodImage1 = new Image();
var foodImage2 = new Image();
var foodImage3 = new Image();
var foodImage4 = new Image();
var foodImage5 = new Image();
var foodImage6 = new Image();
var foodImage7 = new Image();
var foodImage8 = new Image();

foodImage1.src = "./images/chicken.png";
foodImage2.src = "./images/fries.png";
foodImage3.src = "./images/hamburger.png";
foodImage4.src = "./images/hotdog.png";
foodImage5.src = "./images/jerky.png";
foodImage6.src = "./images/pizza.png";
foodImage7.src = "./images/sushi.png";
foodImage8.src = "./images/taco.png";
////////////////////////////////////////////////////////////////

class Food extends Component {
    constructor(classGame, x, y, width, height, imageSrc) {
        super(classGame, x, y, width, height, imageSrc)
    }
}
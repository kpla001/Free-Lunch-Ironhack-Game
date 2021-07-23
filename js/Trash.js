var trashImage1 = new Image();
var trashImage2 = new Image();
var trashImage3 = new Image();
var trashImage4 = new Image();
var trashImage5 = new Image();
var trashImage6 = new Image();
var trashImage7 = new Image();
var trashImage8 = new Image();

trashImage1.src = "./images/bananapeel.png";
trashImage2.src = "./images/cardboard.png";
trashImage3.src = "./images/chair.png";
trashImage4.src = "./images/papertrash.png";
trashImage5.src = "./images/tincan.png";
trashImage6.src = "./images/tire.png";
trashImage7.src = "./images/trashbag.png";
trashImage8.src = "./images/wrapper.png";
/////////////////////////////////////////////////////////////////////////////

class Trash extends Component {
    constructor(classGame, x, y, width, height, imageSrc) {
        super(classGame, x, y, width, height, imageSrc)
    }
}
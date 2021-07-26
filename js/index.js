const game = new Game();

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };

function startGame() {
    return  game.start();
    };
};

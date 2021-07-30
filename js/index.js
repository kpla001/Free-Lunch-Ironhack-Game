const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const landingPage = document.querySelector('.landing-page.instructions');
const canvasHTML = document.getElementById('canvas');

let game = new Game();


startButton.addEventListener('click', () => {
  landingPage.classList.toggle('hidden');
  startButton.classList.toggle('hidden');
  restartButton.classList.toggle('hidden');
  canvasHTML.style.display = "block";
  startGame();
});

restartButton.addEventListener('click', () => {
  game.backgroundAudio.pause();
  game = new Game();
  startGame();
});

// window.onload = () => {
//     document.getElementById('start-button').onclick = () => {
//       startGame();
//     };

function startGame() {
    return  game.start();
    };

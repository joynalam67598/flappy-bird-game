const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = 400;
canvas.width = 600;

let spacePressed = false;
let angel = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;

let temp = canvas.height - 90;

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(10, canvas.height - 90, 50, 50);
    bird.update();
    bird.draw();
    requestAnimationFrame(animate);

}
animate();
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') spacePressed = true;
    temp -= 20;
});

window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') spacePressed = false;
});
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

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop('0.4','#fff');
gradient.addColorStop('0.54','#000');
gradient.addColorStop('0.55','#4040ff');
gradient.addColorStop('0.6','#000');
gradient.addColorStop('0.9','#fff');

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(10, canvas.height - 90, 50, 50);
    // bird.update();
    // bird.draw();
    handleParticels();
    handleObstacles();
    bird.update();
    bird.draw();
    ctx.fillStyle = gradient;
    ctx.font = '90px Georgia';
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleCollisions();
    if (handleCollisions()) return;
    requestAnimationFrame(animate);
    angel += 0.12;
    hue++;
    frame++;

}
animate();
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') spacePressed = true;
    temp -= 20;
});

window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') spacePressed = false;
});


const bang = new Image();
bang.src = 'bang.png'
function handleCollisions() {
    for (let i = 0; i < obstacles.length; i++) {
        if (bird.x < obstacles[i].x + obstacles[i].width &&
            bird.x + bird.width > obstacles[i].x &&
            ((bird.y < obstacles[i].top && bird.y + bird.height > 0) ||
                (bird.y > canvas.height - obstacles[i].bottom &&
                    bird.y + bird.height < canvas.height))) {
            ctx.drawImage(bang, bird.x, bird.y, 50, 50);
            ctx.font = '25px Georgia';
            ctx.fillStyle = 'black';
            ctx.fillText('Game Over, your score is : ' + score, 160, canvas.height / 2 - 10);
            return true;
        }
    }
}
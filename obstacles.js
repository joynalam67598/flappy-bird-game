const obstacles = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height / 3) + 20;
        this.bottom = (Math.random() * canvas.height / 3) + 20;
        this.x = canvas.width;
        this.width = 20;
        this.color = 'hsla(' + hue + ',100%,50%,1)';
        this.counted = false;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top)
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);


    }
    update() {
        this.x -= gameSpeed;
        if (!this.counted && this.x < bird.x) {
            score++;
            this.counted = true;
        }
        this.draw();
    }
}
function handleObstacles() {
    if (frame % 50 === 0) {
        obstacles.unshift(new Obstacle);
    }
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].update();
    }
    if (obstacles.length > 20) {
        obstacles.pop(obstacles[0]);
    }

}
class Bird {
    constructor() {
        this.x = 100;
        this.y = 200;
        this.vy = 0;
        this.width = 20;
        this.height = 20;
        this.weidth = 1;

    }
    update() {
        let curve = Math.sin(angel) * 10;
        if (this.y > canvas.height - (this.height * 3) + curve) {
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        }
        else {
            this.vy += this.weidth;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if (this.y < this.height) {
            this.y = this.height;
            this.vy = 0;
        }
        if (spacePressed && this.y > (this.height * 3)) this.flap();
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    flap() {
        this.vy -= 2;
    }
}
const bird = new Bird;
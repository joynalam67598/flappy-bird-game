class Bird {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.width = 20;
        this.height = 20;
        this.weidth = 1;

    }
    update() {
        this.vy += this.weidth;
        this.y += this.vy;
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
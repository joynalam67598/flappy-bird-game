const particels = [];

class Particel {
    constructor() {
        this.x = bird.x;
        this.y = bird.y;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color = 'hsla(' + hue + ',100%,50%,0.7)';

    }
    // calculate position for each particales for 
    // every fram of animation
    update() {
        this.x -= gameSpeed;
        this.y += this.speedY;



    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
// 
function handleParticels() {
    particels.unshift(new Particel);
    for (i = 0; i < particels.length; i++) {
        particels[i].update();
        particels[i].draw();
    }
    // if more than 200 , remove 20,
    if (particels.length > 200) {
        for (i = 0; i < 20; i++) particels.pop(particels[i]);
    }
}
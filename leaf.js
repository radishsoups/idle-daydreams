const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const leaves = [];

const image = new Image();
image.src = 'images/leaf.svg';

function setup() {
    // full browser drawing
    const body = document.body;
    body.style.width = window.innerWidth + "px";
    body.style.height = window.innerHeight + "px";

    // full-browser canvas
    width = window.innerWidth;
    height = window.innerHeight;

    // set the CSS display size
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    // set the canvas pixel density
    canvas.width = width * pxScale;
    canvas.height = height * pxScale;

    // normalize the coordinate system
    context.scale(pxScale, pxScale);
}

function leafSetup() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // move each leaf
    leaves.forEach(leaf => {
        leaf.move();
    });

    window.requestAnimationFrame(leafSetup);
}

class Leaf {
    constructor() {
        this.xPos = Math.random() * canvas.width;
        this.yPos = 0 - Math.random() * canvas.width;
        this.width = 20 + Math.random() * 10;
        this.height = 15 + Math.random() * 15;
        this.ySpeed = 1 + Math.random() * 1;
    }

    // draw each leaf
    draw() {
        // if the leaf goes off the page
        if (this.yPos > canvas.height || this.xPos > canvas.width) {
            this.xPos = Math.random() * canvas.width;
            this.yPos = 0 - Math.random() * canvas.width;
            this.ySpeed = 1 + Math.random() * 1;
        }

        context.drawImage(image, this.xPos, this.yPos, this.width, this.height);
        context.fill();
    }

    // move each leaf
    move() {
        this.yPos += this.ySpeed
        this.draw()
    }
}

window.addEventListener('load', () => {
    setup();

    // create 500 leaves on load
    for (let i = 0; i < 500; i++) {
        leaves.push(new Leaf());
    }
    leafSetup();
});

window.addEventListener('resize', () => {
    setup();
})


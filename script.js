// browser dimensions
let width;
let height;

// pixel density
let pxScale = window.devicePixelRatio;

// color array for image sampling
let pixelColors = [];

// set up canvas for full browser width and height
function setup(canvas, context) {
    // full browser drawing
    const body = document.body;
    body.style.width = window.innerWidth + "px"
    body.style.height = window.innerHeight + "px"

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

// page one
function one() {
    // display random image on every browser load
    function randomImage() {
        const images = ['flower.png', 'flower2.png', 'flower3.png'];

        let index = Math.round(Math.random() * 2);
        const flower = document.querySelector('#right');
        flower.src = `images/${images[index]}`;
    }

    window.addEventListener('load', () => {
        setup();
        randomImage();
    });

    window.addEventListener('resize', () => {
        setup();
    });
}

// page two
function two() {
    const canvas = document.querySelector('#canvas2');
    const context = canvas.getContext('2d');
    const clouds = [];

    class Circle {
        constructor(x, y) {
            this.xPos = x;
            this.yPos = y;
            this.sizeX = Math.floor(Math.random() * 80) + 50;
            this.sizeY = Math.floor(Math.random() * 80) + 10;
            this.speed = Math.random() * 3 + 1;
        }

        display() {
            context.save();
            context.fillStyle = 'rgba(250, 238, 220, 0.1)';
            context.beginPath();
            context.ellipse(this.xPos, this.yPos, this.sizeX, this.sizeY, 0, 0, 2 * Math.PI);
            context.fill();
            context.restore();
        }

        move(speed) {
            if (this.xPos > window.innerWidth) {
                this.xPos = 0 - (Math.random() * canvas.width);
            }
            this.xPos += 0.8;
        }
    };

    // resize the two divs on browser resize
    function resized() {
        const div = document.querySelector('.lightsoff');

        div.style.width = window.innerWidth + 'px';
        div.style.height = window.innerHeight + 'px';
    }

    // adjust image positions randomly on click
    function lights() {
        const b1 = document.querySelector('#b1');
        const b2 = document.querySelector('#b2');

        let x1 = Math.random() * (window.innerWidth - 80);
        let y1 = Math.random() * (20 - 10) + 10;
        let x2 = Math.random() * (window.innerWidth - 80);
        let y2 = Math.random() * (20 - 10) + 10;

        if (x2 - x1 <= 20) {
            x2 = Math.random() * (window.innerWidth - 100);
        }

        b1.style.left = x1 + 'px';
        b2.style.left = x2 + 'px';
        b1.style.bottom = y1 + 'px';
        b2.style.bottom = y2 + 'px';
    }

    // set the expected frame rate
    let fps = 60;
    let previousTime = performance.now();

    let frameInterval = 1000 / fps;
    let deltaTimeMultiplier = 1;
    let delta_time = 0;

    // draw canvas "sky"
    function draw(currentTime) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        delta_time = currentTime - previousTime;
        deltaTimeMultiplier = delta_time / frameInterval;
        previousTime = currentTime;

        for (let i = 0; i < clouds.length; i++) {
            clouds[i].display();
            clouds[i].move(clouds[i].speed * deltaTimeMultiplier);
        }

        requestAnimationFrame(draw);
    }

    function createCloud(seedX, seedY) {
        for (let i = 0; i < 10; i++) {
            let cloud = new Circle(seedX + Math.random() * 50, seedY + Math.random() * 50);
            clouds.push(cloud);
        }
    }

    // set or remove overlay based on button click
    const sun = document.querySelector('#button');
    let overlay = 0;

    sun.addEventListener('click', () => {
        if (overlay == 0) {
            lights();
            document.getElementById("overlay").className = "show";
            document.querySelector(".lightsoff").setAttribute("id", "showImg");
            overlay = 1;
        }
        else if (overlay == 1) {
            document.getElementById("overlay").className = "hide";
            document.querySelector(".lightsoff").setAttribute("id", "hideImg");
            overlay = 0;
        }
    });

    window.addEventListener('load', () => {
        setup(canvas, context);
        resized();
        lights();

        for (let i = 0; i < 50; i++) {
            createCloud(Math.random() * canvas.width, Math.random() * canvas.height);
            createCloud(Math.random() * canvas.width, Math.random() * canvas.height);
            createCloud(Math.random() * canvas.width, Math.random() * canvas.height);
        }

        window.requestAnimationFrame(draw)
    });

    window.addEventListener('resize', () => {
        setup(canvas, context);
        lights();
        resized();
    });
}

// page three
function three() {
    const o1 = document.querySelector('#o1');
    const o2 = document.querySelector('#o2');
    const o3 = document.querySelector('#o3');
    const o4 = document.querySelector('#o4');
    const o5 = document.querySelector('#o5');
    const o6 = document.querySelector('#o6');
    const o7 = document.querySelector('#o7');
    const o8 = document.querySelector('#o13');
    const o9 = document.querySelector('#o14');
    const o10 = document.querySelector('#o15');
    const o11 = document.querySelector('#o16');
    const o12 = document.querySelector('#o17');
    const o13 = document.querySelector('#o18');
    const o14 = document.querySelector('#o19');
    const o15 = document.querySelector('#o20');
    const o16 = document.querySelector('#o21');
    const o17 = document.querySelector('#o22');

    // displays random image on browser load
    function randomize() {
        const div = document.querySelectorAll('.face');
        let index;
        const images = ['0.jpg', '1.png', '2.jpeg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.gif'];
        div.forEach(face => {
            index = Math.floor(Math.random() * (12 - 0 + 1) + 0);
            face.style.backgroundImage = `url(images/${images[index]})`;
        });
    }

    // adjust divs and images on browser resize
    function resized() {
        const div = document.querySelector('.floats');
        const surface = document.querySelector('#surface');
        const overlay = document.querySelector('#waterOverlay');
        surface.style.width = window.innerWidth + 'px';
        surface.style.height = window.innerHeight + 'px';

        overlay.style.width = window.innerWidth + 'px';
        overlay.style.height = window.innerHeight + 'px';

        div.style.width = window.innerWidth + 'px';
        div.style.height = window.innerHeight + 'px';

        o1.style.left = window.innerWidth - (window.innerWidth * 0.25) + 'px';
        o1.style.top = window.innerHeight - (window.innerHeight * 0.75) + 'px';
        o2.style.left = window.innerWidth - (window.innerWidth * 0.3) + 'px';
        o2.style.top = window.innerHeight - (window.innerHeight * 0.5) + 'px';
        o3.style.left = window.innerWidth - (window.innerWidth * 0.69) + 'px';
        o3.style.top = window.innerHeight - (window.innerHeight * 0.73) + 'px';
        o4.style.left = window.innerWidth - (window.innerWidth * 0.81) + 'px';
        o4.style.top = window.innerHeight - (window.innerHeight * 0.43) + 'px';
        o5.style.left = window.innerWidth - (window.innerWidth * 0.71) + 'px';
        o5.style.top = window.innerHeight - (window.innerHeight * 0.33) + 'px';
        o6.style.left = window.innerWidth - (window.innerWidth * 0.68) + 'px';
        o6.style.top = window.innerHeight - (window.innerHeight * 0.13) + 'px';
        o7.style.left = window.innerWidth - (window.innerWidth * 0.9) + 'px';
        o7.style.top = window.innerHeight - (window.innerHeight * 0.25) + 'px';
        o8.style.left = window.innerWidth - (window.innerWidth * 0.95) + 'px';
        o8.style.top = window.innerHeight - (window.innerHeight * 0.8) + 'px';
        o9.style.left = window.innerWidth - (window.innerWidth * 0.1) + 'px';
        o9.style.top = window.innerHeight - (window.innerHeight * 0.15) + 'px';
        o10.style.left = window.innerWidth - (window.innerWidth * 0.2) + 'px';
        o10.style.top = window.innerHeight - (window.innerHeight * 0.9) + 'px';
        o11.style.left = window.innerWidth - (window.innerWidth * 0.95) + 'px';
        o11.style.top = window.innerHeight - (window.innerHeight * 0.15) + 'px';
        o12.style.left = window.innerWidth - (window.innerWidth * 0.85) + 'px';
        o12.style.top = window.innerHeight - (window.innerHeight * 1) + 'px';
        o13.style.left = window.innerWidth - (window.innerWidth * 0.65) + 'px';
        o13.style.top = window.innerHeight - (window.innerHeight * 0.9) + 'px';
        o14.style.left = window.innerWidth - (window.innerWidth * 0.40) + 'px';
        o14.style.top = window.innerHeight - (window.innerHeight * 0.25) + 'px';
        o15.style.left = window.innerWidth - (window.innerWidth * 0.1) + 'px';
        o15.style.top = window.innerHeight - (window.innerHeight * 0.6) + 'px';
        o16.style.left = window.innerWidth - (window.innerWidth * 0.35) + 'px';
        o16.style.top = window.innerHeight - (window.innerHeight * 1) + 'px';
        o17.style.left = window.innerWidth - (window.innerWidth * 0.81) + 'px';
        o17.style.top = window.innerHeight - (window.innerHeight * 0.53) + 'px';
    }

    window.addEventListener('load', () => {
        resized();
        randomize();
    });

    window.addEventListener('resize', () => {
        resized();
    });
}

// function calls based on page path names
if (location.pathname.includes('one')) {
    one();
}
if (location.pathname.includes('two')) {
    two();
}
if (location.pathname.includes('three')) {
    three();
}


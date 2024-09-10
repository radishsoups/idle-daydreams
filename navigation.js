const pageOne = document.querySelector('#btnOne');
const pageTwo = document.querySelector('#btnTwo');
const pageThree = document.querySelector('#btnThree');

const image = document.querySelector('#bgImage');
const picture = document.querySelector('#behind');
const a = document.querySelector('#link');

function replace() {
    image.src = 'navigationImages/bgTransparent.png';
}

pageOne.addEventListener('click', () => {
    picture.style.opacity = 1;
    picture.src = 'navigationImages/naviOne.jpg';
    a.href = "./one.html";
    replace();
});

pageTwo.addEventListener('click', () => {
    picture.style.opacity = 1;
    picture.src = 'navigationImages/naviTwo.jpg';
    a.href = "./two.html";
    replace();
});

pageThree.addEventListener('click', () => {
    picture.style.opacity = 1;
    picture.src = 'navigationImages/naviThree.jpg';
    a.href = "./three.html";
    replace();
});

window.addEventListener('load', () => {
    document.getElementById("bgImage").style.cursor = "crosshair";

    const toReplace = document.querySelector('#toReplace');
    toReplace.style.width = image.width + 'px';
    let dim = image.getBoundingClientRect();
    toReplace.style.left = dim.left + 110 + 'px';
    toReplace.style.top = dim.top + 100 + 'px';
    picture.style.height = image.height / 2 + 'px';
    picture.style.width = 'auto';
});

window.addEventListener('resize', () => {
    const toReplace = document.querySelector('#toReplace');
    toReplace.style.width = image.width + 'px';
    let dim = image.getBoundingClientRect();
    toReplace.style.left = dim.left + 110 + 'px';
    toReplace.style.top = dim.top + 100 + 'px';
    picture.style.height = image.height / 2 + 'px';
    picture.style.width = 'auto';
});
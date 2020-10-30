var body = document.querySelector("body");
var mario = document.querySelector(".mario");
var running = false;
var bgPosition = 0;
var int;

function moveMario(event) {
    if (event.charCode === 54 && !running) {
        mario.style.backgroundImage = "url('mario_running.gif')";
        running = true;
        int = setInterval(moveBg, 1);
    }
}
function moveLeftMario(event) {
    console.log(event)
    if (event.charCode === 52 && !running) {
        mario.style.backgroundImage = "url('mario_running.gif')";
        running = true;
        int = setInterval(moveLeftBg, 1);
    }
}

function stopMario(event) {
    if (event.keyCode === 102) {
        mario.style.backgroundImage = "url('mario.png')";
        running = false;
        clearInterval(int);
    }
}
function stopLeftMario(event) {
    if (event.keyCode === 100) {
        mario.style.backgroundImage = "url('mario.png')";
        running = false;
        clearInterval(int);
    }
}

function moveBg(event) {
    bgPosition = bgPosition - 1;
    body.style.backgroundPositionX = bgPosition + 'px';
}

function moveLeftBg(event) {
    bgPosition = bgPosition + 1;
    body.style.backgroundPositionX = bgPosition + 'px';
}

body.addEventListener("keypress", moveMario);
body.addEventListener("keyup", stopMario);
body.addEventListener("keypress", moveLeftMario);
body.addEventListener("keyup", stopLeftMario);
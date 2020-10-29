var body = document.querySelector("body");
var player = document.querySelector(".zidane");

function movePlayer(event) {
    /*console.log(event)*/
    player.style.left = event.clientX + "px";
    player.style.top = event.clientY + "px";

}

body.addEventListener("click", movePlayer);
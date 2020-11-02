var button = document.querySelector('button');

function createImage(url) {
    var img = document.createElement('img');
    var body = document.querySelector('body');

    img.setAttribute('src', url);
    body.appendChild(img);
}
function getData() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://dog.ceo/api/breeds/image/random');

    req.onload = function () {
        createImage(JSON.parse(req.responseText).message)
    }
    req.send();
}
button.addEventListener("click", getData)
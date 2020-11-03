var button = document.querySelector('button');

function createImage(url) {
    var img = document.createElement('img');
    var body = document.querySelector('body');

    img.setAttribute('src', url);
    body.appendChild(img);
}

// removeCurrentImage(){
// var img = document.querySelector('img')

// img && img.parentElement.removeChild(img); // VAZNO! zato sto na pocetku nema nikakvog jpg-a pa mora oba uslova da ispuni - &&
// }

function getData() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://dog.ceo/api/breeds/image/random');

    req.onload = function () { //kad se uspesno desi funkcija ovo ce se desiti
        // removeCurrentImage();
        createImage(JSON.parse(req.responseText).message) // --sve ovo u zagradi je parametar tj. URL -- responseText je string zato sam umotao u JSON.parse da pretvorim u JS objekat, on u sebi ima 2 propertyja, najbolje consologovati req i responeseText, property message se ne zove uvek tako
    }
    req.send();
}
button.addEventListener("click", getData)
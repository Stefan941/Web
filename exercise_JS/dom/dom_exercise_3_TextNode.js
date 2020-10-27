function text() {

    alert(document.querySelector("ul li").textContent);

}
text();

function textSec(a) {

    document.querySelector("ul").lastElementChild.textContent = a;

}
textSec("Some new text!");
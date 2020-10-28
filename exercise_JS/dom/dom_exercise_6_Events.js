function changeBackground() {

    var background = document.querySelector("body")
    background.classList.toggle("background")

}

function offButton() {

    var background2 = document.querySelectorAll("button")[0]
    background2.removeAttribute("onclick")
}
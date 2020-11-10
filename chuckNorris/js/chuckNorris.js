let container = document.querySelector(".container");
let btn = document.querySelector("button")


function createJoke(jokeText) {
    let paragraph = document.createElement("p");

    paragraph.textContent = jokeText

    container.appendChild(paragraph)

    //console.log(jokeText)
}


function getRequest() {

    const url = "https://api.chucknorris.io/jokes/random"

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            createJoke(data.value);
        })
}


btn.addEventListener("click", function () {
    getRequest();
});
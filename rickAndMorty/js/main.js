let character = document.querySelector("main.wrapper");

function storeCharacter(dataId) {
    localStorage.setItem("id", dataId);
}

function createCharacters(dataChar) {
    //console.log("Single", dataChar)
    let container = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("p");

    img.setAttribute("src", dataChar.image);
    name.textContent = dataChar.name;

    container.appendChild(img);
    container.appendChild(name)
    character.appendChild(container)

    name.addEventListener("click", function () {
        storeCharacter(dataChar.id);
        window.location.href = "./index2.html";
    });

}

function listCharacters(data) {
    console.log(data)
    for (var i = 0; i < 20; i++) {
        createCharacters(data[i]);
    }
}

function getCharacters() {
    // var req = new XMLHttpRequest();
    // var baseUrl = "https://rickandmortyapi.com/api/character";

    // req.open("GET", baseUrl);

    // req.onload = function () {
    //     listCharacters(JSON.parse(req.responseText).results);
    // };
    // req.send();

    const url = "https://rickandmortyapi.com/api/character"

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            listCharacters(data.results);
        })
}
getCharacters();



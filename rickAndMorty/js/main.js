let character = document.querySelector("main.wrapper");

const storeCharacter = (dataId) => {
    localStorage.setItem("id", dataId);
}

const createCharacters = (dataChar) => {
    //console.log("Single", dataChar)
    let container = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("p");

    img.setAttribute("src", dataChar.image);
    name.textContent = dataChar.name;

    container.appendChild(img);
    container.appendChild(name)
    character.appendChild(container)

    img.addEventListener("click", function () {
        storeCharacter(dataChar.id);
        window.location.href = "./index2.html";
    });

}

const listCharacters = (data) => {
    for (let i = 0; i < data.length; i++) {
        createCharacters(data[i]);
    }
}

const getCharacters = () => {
    // var req = new XMLHttpRequest();
    // var baseUrl = "https://rickandmortyapi.com/api/character";

    // req.open("GET", baseUrl);

    // req.onload = function () {
    //     listCharacters(JSON.parse(req.responseText).results);
    // };
    // req.send();

    const url = "https://rickandmortyapi.com/api/character"

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            listCharacters(data.results);
        })
}
getCharacters();



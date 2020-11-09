let oneCharacter = document.querySelector("main.wrapper")

function createCharacter(dataChar) {

    let container = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("p");
    console.log(dataChar)
    img.setAttribute("src", dataChar.image);
    name.textContent = dataChar.name;

    container.appendChild(img);
    container.appendChild(name)
    oneCharacter.appendChild(container)

}



function getCharacter() {

    const url = "https://rickandmortyapi.com/api/character/" + localStorage.getItem("id")

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            createCharacter(data);
        })
}
getCharacter();

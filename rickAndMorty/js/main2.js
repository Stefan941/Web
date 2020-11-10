let oneCharacter = document.querySelector("main.wrapper")

const createCharacter = (dataChar) => {

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



const getCharacter = () => {

    const url = "https://rickandmortyapi.com/api/character/" + localStorage.getItem("id")

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            createCharacter(data);
        })
}
getCharacter();

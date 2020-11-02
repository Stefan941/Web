var search = document.querySelector("input");

function pressEnter(event) {
    if (event.keyCode === 13) {
        getData();
    }
}

function createUsers() {

}

function getData() {
    var req = new XMLHttpRequest();
    req.open("GET", "https://api.github.com/search/users?q=" + search.value);

    req.onload = function () {
        console.log(JSON.parse(req.responseText).items)
        createUsers();
    }
    req.send();
}

search.addEventListener("keydown", pressEnter);
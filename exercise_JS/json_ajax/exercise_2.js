var search = document.querySelector(".search");
var users = document.querySelector("main .wrapper")

function pressEnter(event) {
    if (event.keyCode === 13) {
        getUsers();
    }
}

function createUser(user) {
    var userContainer = document.createElement("div");
    var userImage = document.createElement("img");
    var userName = document.createElement("p");

    userImage.setAttribute("src", user.avatar_url)
    userName.textContent = user.login;

    userContainer.appendChild(userImage);
    userContainer.appendChild(userName);

    users.appendChild(userContainer)
}

function listUsers(usersData) { //usersData je array
    users.innerHTML = "";

    for (var i = 0; i < usersData.length; i++) {
        createUser(usersData[i])
    }
}

function getUsers() {
    var req = new XMLHttpRequest();
    var baseUrl = "https://api.github.com/search/users?q="

    req.open("GET", baseUrl + search.value);

    req.onload = function () {
        listUsers(JSON.parse(req.responseText).items) //array svih korisnika
    }
    req.send();
}

search.addEventListener("keydown", pressEnter);


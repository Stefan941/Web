var search = document.querySelector(".search");
var videos = document.querySelector("main .wrapper");
var apiKey = "AIzaSyCCm1XuogmUPicGnnKP6eHhwrHNuqTujfk"

function pressEnter(event) {
    if (event.keyCode === 13) {
        getVideo();
    }
}

function listVideos(usersData) {
    console.log(usersData)
    // for (var i = 0; i < usersData.length; i++) {
    //     createUser(usersData[i])
    // }
}


function getVideo() {
    var req = new XMLHttpRequest();
    var baseUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q="

    req.open("GET", baseUrl + search.value + "&key=" + apiKey);

    req.onload = function () {

        listVideos(JSON.parse(req.responseText).items)
    }
    req.send();
}

search.addEventListener("keydown", pressEnter);
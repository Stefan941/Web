var search = document.querySelector(".search");
var shows = document.querySelector("main.wrapper");

// function pressEnter(event) {
//   if (event.keyCode === 13) {
//     //getVideo();
//   }
// }

function storeShows(showId) {
  localStorage.setItem("id", showId);
}
// storeShows("1"); //ovo ne ide tu vec dole je vec pozvana

function createShows(data) {
  var showsContainer = document.createElement("div");
  var showsImg = document.createElement("img");
  var showsTitle = document.createElement("p");

  showsImg.setAttribute("src", data.image.medium);
  showsTitle.textContent = data.name;

  showsContainer.appendChild(showsImg);
  showsContainer.appendChild(showsTitle);

  shows.appendChild(showsContainer);

  showsTitle.addEventListener("click", function () {
    storeShows(data.id);
    window.location.href = "http://127.0.0.1:5500/bitShowProject/infoPage.html";
  });
}

function listShows(showsData) {
  console.log(showsData);
  for (var i = 0; i < 12; i++) {
    createShows(showsData[i]);
  }
}

function getShows() {
  var req = new XMLHttpRequest();
  var baseUrl = "http://api.tvmaze.com/shows";

  req.open("GET", baseUrl);

  req.onload = function () {
    listShows(JSON.parse(req.responseText));
  };
  req.send();
}
getShows();

var search = document.querySelector(".search2");
var mainWrapper = document.querySelector("main.wrapper2");

function createShowsMain(data) {
  var mainContainer = document.createElement("div");
  var secondContainer = document.createElement("div");
  var img = document.createElement("img");
  var season = document.createElement("div");
  var cast = document.createElement("div");
  var details = document.createElement("div");

  img.setAttribute("src", data.image.medium);
  details.innerHTML = data.summary;

  secondContainer.appendChild(img);
  secondContainer.appendChild(season);
  secondContainer.appendChild(cast);

  mainContainer.appendChild(secondContainer);
  mainContainer.appendChild(details);
  mainWrapper.appendChild(mainContainer);
}

// function createCast(dataCast) {
// }

// function listCast(data) {
//   for (var i = 0; i < data.legnth; i++) {
//     creaateCast(data[i]);
//   }
// }

// function getCast{

// }

function createSeason(dataSeason) {
  season.textContent = dataSeason.premierDate;
  secondContainer.appendChild(season);
}

function listSeason(data) {
  for (var i = 0; i < data.length; i++) {
    createSeason(data[i]);
  }
}

function getSeason() {
  var req = new XMLHttpRequest();
  var baseUrl = "http://api.tvmaze.com/shows/";

  req.open("GET", baseUrl + localStorage.getItem("id") + "/seasons");

  req.onload = function () {
    listSeason(JSON.parse(req.responseText));
  };
  req.send();
}
getSeason();

function getTvShows() {
  var req = new XMLHttpRequest();
  var baseUrl2 = "http://api.tvmaze.com/shows/";

  req.open("GET", baseUrl2 + localStorage.getItem("id")); //localStorage je bila jedna linija pa je ovde stavio, localStorage u sebi ima pojedinacni ID

  req.onload = function () {
    createShowsMain(JSON.parse(req.responseText));
  };
  req.send();
}
getTvShows();

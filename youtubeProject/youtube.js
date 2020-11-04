var search = document.querySelector(".search");
var videos = document.querySelector("main .wrapper");
//var apiKey stari = "AIzaSyCCm1XuogmUPicGnnKP6eHhwrHNuqTujfk"
var apiKey = "AIzaSyAdBBeWZZ9KN3mhf6TxzJM5dzR5IWB9HAM";
var iframe = document.querySelector('iframe');

function pressEnter(event) {
    if (event.keyCode === 13) {
        //clasList.remove("active");
        //search.value = "";
        getVideo();
    }
}

function openVideo(videoId) {
    iframe.src = 'https://www.youtube.com/embed/' + videoId;
    iframe.classList.add('visible');
}

function createVideos(videoData) {
    var videoContainer = document.createElement("div");
    var videoImg = document.createElement("img");
    var videoTitle = document.createElement("p");
    var videoDescription = document.createElement("p");

    videoImg.setAttribute("src", videoData.snippet.thumbnails.default.url)
    videoTitle.textContent = videoData.snippet.title
    videoDescription.textContent = videoData.snippet.description;

    videoTitle.addEventListener('click', function () {
        openVideo(videoData.id.videoId);
        //getRelated(videoData.id.videoId);
    })


    videoContainer.appendChild(videoImg);
    videoContainer.appendChild(videoTitle);
    videoContainer.appendChild(videoDescription);

    videos.appendChild(videoContainer)
}

function listVideos(videosData) {
    //videoList.innerHTML = ""
    console.log(videosData)
    for (var i = 0; i < videosData.length; i++) {
        createVideos(videosData[i])
    }
}

function getVideo() {
    var req = new XMLHttpRequest();
    var baseUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q="

    req.open("GET", baseUrl + search.value + "&key=" + apiKey);

    req.onload = function () {

        listVideos(JSON.parse(req.responseText).items)
    }
    req.send();
}

function getRelated(videoId) {
    var req2 = new HMLHttpRequest();
    baseUrl2 = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId="

    req2.open("GET", baseUrl2 + videoId + "&key=" + apiKey);

    req2.onload = function () {
        listVideos(JSON.parse(req2.responseText).items)
    }
    req2.send();
}

search.addEventListener("keydown", pressEnter);
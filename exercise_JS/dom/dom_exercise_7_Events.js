var button = document.querySelector("button");
var container = document.querySelector("div");
var input = document.querySelector("input");

button.onclick = function () {
    var message = document.createElement("span");
    message.textContent = input.value;


    input.value = "";
    container.appendChild(message);
}


// Hendler funkcija - drugi nacin
// This je taj element na kom se desava event unutar hendler funkcije
// unutar hendler funkcije ce postojati event objekat - ima podatke o samom eventu koji se desilo
// ima i podatke o tome koji karakter je kliknut, tip eventa koji se desio, target - taj element na kom se desio event
// parametar Event moramo da stavimo da bi imali pristup

// function createMessage(event) {
//    console.log(event)
//     var message = document.createElement("span");
//     message.textContent = input.value;


//     input.value = "";
//     container.appendChild(message);
// }

// button.addEventListener("click", createMessage);
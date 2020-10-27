function select() {

    var active = document.querySelector(".active");
    active.className = "";

    var secondlist = active.parentElement;
    var firstlist = secondlist.previousElementSibling;

    firstlist.firstElementChild.className = "active";

}

setTimeout(select, 3000);
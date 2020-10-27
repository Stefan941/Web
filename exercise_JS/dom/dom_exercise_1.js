
function background() {

    var second = document.getElementsByTagName("ul")[1];
    second.className = "slist"
}

background();




function addClass() { //prvo selektuje trecu listu pa onda u okviru trece liste sve list iteme, i onda FOR petlja kroz sve li 

    var thirdlist = document.querySelectorAll("ul")[2]; //ovo 2 je index na arrey-u svih ul
    var items = thirdlist.querySelectorAll("li"); //arrey svih li dobijen querySelectorAll-om

    for (var i = 0; i < items.length; i++) {
        items[i].className = "background-green";
    }
}
addClass();
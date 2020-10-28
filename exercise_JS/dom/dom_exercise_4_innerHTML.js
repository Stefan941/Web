//1. korak - napraviti pa pozvati funkciju i proslediti parametrima vrednosti
//2. korak - napraviti element select
//3. korak - napraviti for petlju koja prolazi kroz sve clanove niza, duzina je imeArraya tj. parametar.length
//4. korak - dodati u element options putem textContent-a imeArraya tj. njegov parametar od svakog clana niza tj. [i]
//5. korak - u select element putem appendChilda dodati options element
//6. korak - imeElementa tj. u njegov parametar putem appendChilda ubaciti select element


var first = document.querySelector(".first");
var second = document.querySelector(".second")
var cars = ["BMW", "Porshe", "Ferrari", "Toyota"];
var tel = ["Nokia", "Iphone", "Huawei", "Tesla"]

function createSelect(target, data) {
    var select = document.createElement("select");

    for (i = 0; i < data.length; i++) {
        var option = document.createElement("option")
        option.textContent = data[i]
        select.appendChild(option)

    }

    target.appendChild(select)
}
createSelect(first, cars);
createSelect(second, tel);


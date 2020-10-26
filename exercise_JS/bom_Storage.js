function storeData(catName) {
    localStorage.setItem("name", catName)
}
storeData("Zucko");


function printData() {
    console.log(localStorage.getItem("name"))
}
printData();


function removeData() {
    localStorage.removeItem("name")
}
removeData();
console.log(localStorage)
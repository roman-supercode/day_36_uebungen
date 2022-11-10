// Schreibe eine Funktion, die beim Anklicken des Buttons die jeweilige
// Farb - Option aus der Liste entfernt.

const mySelectElement = document.querySelector("#farbeAuswahlen");
console.log(mySelectElement);

function onClickRemove(event) {
    event.preventDefault();

    const selectIndex = mySelectElement.selectedIndex;
    console.log(selectIndex);

    // 1. Methode
    mySelectElement.remove(selectIndex);
    // 2. Methode
    // mySelectElement.removeChild(mySelectElement[selectIndex]);

}





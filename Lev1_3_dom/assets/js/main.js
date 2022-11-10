// Schreibe eine Funktion, die beim Anklicken der Buttons das first- oder last-ElementChild anzeigt. Schau dir das Ergebnis in der Ergebnisvorschau an.

const listElement = document.getElementById("myList");
// console.log(listElement);

const buttons = document.querySelectorAll("button");
// console.log(buttons);

const output = document.querySelector("output");
// console.log(output);

// for..of-loop
for (let button of buttons) {

    // EventListener für jeden Button
    button.addEventListener("click", (e) => {
        // Zugriff auf den Text aus dem ausgewählten Button
        let buttonValue = e.target.textContent;
        console.log(buttonValue);

        // Switchvergleich 
        switch (buttonValue) {
            case "# firstElementChild":
                output.innerHTML = listElement.firstElementChild.innerHTML;
                break;
            case "# lastElementChild":
                output.innerHTML = listElement.lastElementChild.innerHTML;
                break;
            case "# firstElementChild nextElementSibling":
                output.innerHTML = listElement.firstElementChild.nextElementSibling.innerHTML;
                break;
            case "# lastElementChild previousElementSibling":
                output.innerHTML = listElement.lastElementChild.previousElementSibling.innerHTML;
                break;
        }
    });
}
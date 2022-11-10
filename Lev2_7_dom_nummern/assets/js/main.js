// Schreibe eine Funktion, die beim Anklicken des Buttons ein Element mit aufsteigenden Nummern erstellt.

let counter = 0;

const containerDiv = document.querySelector(".umwickeln");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    // console.log("test");

    const pChild = document.createElement("p");
    pChild.textContent = `${counter}`;
    console.log(pChild);

    containerDiv.appendChild(pChild);
    // console.log(containerDiv);

    if (counter % 10 === 0) {
        pChild.classList.add("rechteck");
        pChild.classList.add("weiss");
    } else {
        pChild.classList.add("rechteck");
    }
    counter++;
});
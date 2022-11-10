// Schreibe eine Funktion, die beim Anklicken des Buttons neues Listenelement erstellt.
// Sorge dafür, dass beim betätigen der ENTER-Taste ebenfalls ein Listenelement erstellt wird.

// Zugriff auf den submit Button
const button = document.getElementById("enter");

// ** 1. Arrow-function
// Setze auf den Button ein EventListener, der beim click eine anonyme Arrow-function ausführt
button.addEventListener("click", () => createListElement());


// Zugriff auf Userinput
const userInputValidate = document.getElementById("userinput");

// ** 2. Arrow-funtion
// Setze auf das Inputfeld einen EventListener, der bei Tastendruck eine Arrow-function ausführt
userInputValidate.addEventListener("keydown", (e) => {
    //// console.log(e.key);
    // Validierung des Tastendrucks, beim Enter Tastendruck wird eine Funktion ausgeführt
    if (e.key === "Enter") {
        createListElement();
    }
});

// ** Callback Function
function createListElement() {
    // Zugriff auf den Wert aus Userinput 
    let userInput = document.getElementById("userinput").value;
    //// console.log(userInput);

    // Zugriff auf unordered List
    let ul = document.querySelector("ul");

    // Erstelle in JS ein li-Element
    let li = document.createElement("li");

    // Weise dem li-Element den Wert aus Userinput
    li.textContent = userInput;

    // Füge das erstellte li-Element in die unordered List im unserem HTML-Dokument
    ul.appendChild(li);

    // Leere das Inputfeld nach Ausführung
    document.getElementById("userinput").value = "";
};

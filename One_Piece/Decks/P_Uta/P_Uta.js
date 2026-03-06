const P_UtaDeck = [
    "1xP-011",
    "4xOP01-016",
    "2xST21-003",
    "4xOP06-009",
    "4xOP10-005",
    "4xP-022",
    "3xPRB02-003",
    "1xST01-010",
    "2xST21-015",
    "3xEB03-002",
    "4xEB03-003",
    "4xOP11-003",
    "3xST23-001",
    "2xOP04-118",
    "3xOP07-002",
    "4xOP09-009",
    "3xST23-002"
]
let text = "";
for (let i = 0; i < P_UtaDeck.length; i++) {
    text += P_UtaDeck[i] + "<br>";
}
document.getElementById("P_Uta").innerHTML = text;

function CopiarDeck() {
    let copyText = document.getElementById("P_Uta").innerText;
    navigator.clipboard.writeText(copyText);
    let button = document.getElementById("CopiarUtaDeck");
    button.textContent = "Deck copiado"
}

const generarbtn = document.getElementById("generar");
generarbtn.addEventListener("click", function() {
    let lista = document.getElementById("P_Uta");
    lista.classList.add("revelar");
     let lider = document.getElementById("lider");
        lider.classList.add("revelar");
    generarbtn.classList.add("ocultar");
    let copiar = document.getElementById("CopiarUtaDeck");
    copiar.classList.add("revelar");
});
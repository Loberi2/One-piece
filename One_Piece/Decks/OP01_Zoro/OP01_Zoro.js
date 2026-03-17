
let OP01_ZoroDeck = [
"1xOP01-001",
"4xOP01-016",
"4xOP13-012",
"4xST01-003",
"4xST01-006",
"4xEB01-006",
"4xEB02-003",
"4xOP04-010",
"4xOP08-007",
"4xOP08-010",
"4xP-101",
"4xEB02-001",
"2xOP09-004",
"4xOP08-018",
"4xOP08-019",
"2xOP01-026",
]

let text = "";
for (let i = 0; i < OP01_ZoroDeck.length; i++) {
    text += OP01_ZoroDeck[i] + "<br>";
}
document.getElementById("OP01_Zoro_Deck").innerHTML = text;

//Enseñar Deck y Boton
const generardeck = document.getElementById("generar");
    generardeck.addEventListener("click", function() {
        const deck = document.getElementById("OP01_Zoro_Deck");
        deck.classList.add("revelar");
        const lider = document.getElementById("lider");
        lider.classList.add("revelar");
        generardeck.classList.add("ocultar");
        const copiar = document.getElementById("Copiar_Zoro_OP01_Deck");
        copiar.classList.add("revelar");
    });

// Copiar Deck
function CopiarDeck() {
    const copytext = document.getElementById("OP01_Zoro_Deck").innerText;
    navigator.clipboard.writeText(copytext);
    const button = document.getElementById("Copiar_Zoro_OP01_Deck");
    button.textContent = "Deck copiado"
}



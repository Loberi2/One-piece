const luffy_deck = [
"1xOP01-003",
"4xOP14-013",
"3xOP01-025",
"4xP-006",
"3xEB01-003",
"4xOP14-016",
"2xP-001",
"4xEB01-015",
"4xST02-007",
"4xOP01-039",
"4xEB01-012",
"3xOP01-047",
"4xST02-009",
"4xOP01-051",
"2xOP01-029",
"1xST01-016",
]
let text = "";
for (let i = 0; i < luffy_deck.length; i++) {
    text += luffy_deck[i] + "<br>";
}
document.getElementById("luffyop01").innerHTML = text;

function CopiarDeck() {
    const copyText = document.getElementById("luffyop01").innerText;
    navigator.clipboard.writeText(copyText);
    const button = document.getElementById("CopiarLuffyDeck");
    button.textContent = "Deck copiado"
}

const generarbtn = document.getElementById("generar");
generarbtn.addEventListener("click", function() {
    const lista = document.getElementById("luffyop01");
    lista.classList.add("revelar");
    const lider = document.getElementById("lider");
    lider.classList.add("revelar");
    generarbtn.classList.add("ocultar");
    const copiar = document.getElementById("CopiarLuffyDeck");
    copiar.classList.add("revelar");
});


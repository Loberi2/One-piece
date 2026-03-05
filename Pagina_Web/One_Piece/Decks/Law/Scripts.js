const law_deck = [
    "1xOP01-002",
    "4xOP01-006",
    "4xOP14-013",
    "4xOP14-016",
    "2xEB01-015",
    "4xOP12-034",
    "4xST02-007",
    "4xST24-002",
    "2xPRB02-006",
    "4xEB01-012",
    "4xOP12-118",
    "3xST02-009",
    "3xOP01-051",
    "4xOP14-018",
    "2xOP01-027",
    "2xOP12-037"
]
let text = "";
for (let i = 0; i < law_deck.length; i++) {
    text += law_deck[i] + "<br>";
}
document.getElementById("OP1LawProfile").innerHTML = text;

function CopiarDeck() {
    let copyText = document.getElementById("OP1LawProfile").innerText;
    navigator.clipboard.writeText(copyText);
    let button = document.getElementById("CopiarLawDeck");
    button.textContent = "Deck copiado"
}

const generarbtn = document.getElementById("generar");

generarbtn.addEventListener("click", function() {
    let lista = document.getElementById("OP1LawProfile");
    lista.classList.add("revelar");
     let lider = document.getElementById("lider");
        lider.classList.add("revelar");
    generarbtn.classList.add("ocultar");
    let copiar = document.getElementById("CopiarLawDeck");
    copiar.classList.add("revelar");
});

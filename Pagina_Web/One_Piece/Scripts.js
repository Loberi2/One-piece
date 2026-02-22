function CopiarDeck() {
    let copyText = document.getElementById("OP1LawProfile").innerText;
    navigator.clipboard.writeText(copyText);
    let button = document.getElementById("CopiarLawDeck");
    button.textContent = "Deck copiado"
}
/*function generar(){
   let generar = document.getElementById("generar");
   let copiar = document.getElementById("CopiarLawDeck");
   let lista = document.getElementById("OP1LawProfile");
   lista.classList.add("revelar");
   generar.classList.add("ocultar");
   copiar.classList.add("revelar");
}*/

const generarbtn = document.getElementById("generar");

generarbtn.addEventListener("click", function() {
    let lista = document.getElementById("OP1LawProfile");
    lista.classList.add("revelar");
    generarbtn.classList.add("ocultar");
    let copiar = document.getElementById("CopiarLawDeck");
    copiar.classList.add("revelar");
});


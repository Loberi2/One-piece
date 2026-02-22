
/* Pruebas de JavaScript archivo pruebas.html */

/* Boton para cambiar el color de fondo a azul al hacer click */
const boton = document.getElementById("boton");
boton.addEventListener("click", function() {
    boton.classList.toggle("azul");
});

function ShowB2() {
    let boton2 = document.getElementById("boton2");
    let boton3 = document.getElementById("boton3");
    boton2.style.display = "none";
    boton3.style.display = "block";
}

let botonpar = document.getElementById("botonpar");
let par = document.getElementById("par");
let impar = document.getElementById("impar");

botonpar.addEventListener("click", function() { 
    let numero = document.getElementById("numero").value;
    if (numero % 2 == 0) {
        let numero = document.getElementById("numero").value;
        par.classList.remove("ocultar");
        impar.classList.add("ocultar");
    }
    else {
        impar.classList.remove("ocultar");
        par.classList.add("ocultar");   
    }
});   

botonmayor = document.getElementById("botonmayor");
let mayor = document.getElementById("mayor");
let menor = document.getElementById("menor");

botonmayor.addEventListener("click", function() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    switch (true) {
        case numero1 == numero2:
            mayor.classList.add("ocultar");
            menor.classList.add("ocultar");
            break;
        case numero1 > numero2:
            mayor.classList.remove("ocultar");
            menor.classList.add("ocultar");
            break;
        case numero1 < numero2:
            mayor.classList.add("ocultar");
            menor.classList.remove("ocultar");
            break;
    }

} );

function jugar(jugada) {
    let opciones = ["piedra", "papel", "tijeras"];
    let random = Math.floor(Math.random() * 3);
    let IA = opciones[random];
    let resultado = "empate"; 
    if (jugada == IA) {
        resultado = "empate";
    }
    else if ((jugada == "piedra" && IA == "tijeras") || (Jugada == "tijeras" && IA == "papel") || (Jugada == "papel" && IA == "tijeras"))
        resultado = "Victoria"
    else {
        resultado = "Derrota"
    }
    alert("Jugaste: " + jugada + "\nLa IA jugó: " + IA + "\nEl resultado es: " + resultado);
}


/*
let hola = ["hola", "adios", "puto", "maricon", "gilipollas"];
let hola2 = new Array("hola", "adios", "puto", "maricon", "gilipollas");


for (let i = 0; i < hola.length; i++) {

console.log(hola[i]);

}

var resultado = false
let posicion = 0

while (resultado == false) {

    if (hola[posicion] == "maricon") {
    resultado = true
    console.log("La palabra maricon se encuentra en la posición " + posicion)
    }
    else {
    posicion += 1
    }

}

//1 galeria de fotos
//2 lista de mazos en formato json
//3 buscar como pasar el archivo json a js y pasar a una array y iterarlo para mostrar el valor de cada carta que tendra como valor su imagen correspondiente

const mazoasociativo = {
    "1xOP01-002": "img/OP01-002.png",
    "4xOP01-006": "img/OP01-006.png",
    "4xOP14-013": "img/OP14-013.png",
    "4xOP14-016": "img/OP14-016.png",
    "2xEB01-015": "img/EB01-015.png",
    "4xOP12-034": "img/OP12-034.png",
    "4xST02-007": "img/ST02-007.png",
    "4xST24-002": "img/ST24-002.png",
    "2xPRB02-006": "img/PRB02-006.png",
    "4xEB01-012": "img/EB01-012.png",
    "4xOP12-118": "img/OP12-118.png",
    "3xST02-009": "img/ST02-009.png",
    "3xOP01-051": "img/OP01-051.png",
    "4xOP14-018": "img/OP14-018.png",
    "2xOP01-027": "img/OP01-027.png",
    "2xOP12-037": "img/OP12-037.png"
}

console.log(mazoasociativo["1xOP01-002"]);

let lawDeck = [
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
];

const lista = document.getElementById("lista");*/



/*const generarbtn = document.getElementById("generar");

function generar(){
lista.innerHTML = "";
for (let i = 0; i < lawDeck.length; i++) {
   let li = document.createElement("li")
   li.innerText = lawDeck[i];
   console.log("hemos insertado"+lawDeck[i]);
    lista.appendChild(li);
}
}

generarbtn.addEventListener("click", generar);

generarbtn.addEventListener("click", () => {
    lista.innerHTML = "";
    for (let i = 0; i < lawDeck.length; i++) {
   let li = document.createElement("li")
   li.innerText = lawDeck[i];
   console.log("hemos insertado"+lawDeck[i]);
    lista.appendChild(li);
}
});
*/


/* Boton para cambiar el color de fondo a azul al hacer click */
const boton = document.getElementById("boton");
boton.addEventListener("click", function() {
    boton.classList.toggle("azul");
});

// Cambiar boton de color
function ShowB2() {
    let boton2 = document.getElementById("boton2");
    let boton3 = document.getElementById("boton3");
    boton2.style.display = "none";
    boton3.style.display = "block";
}
// Detectar numero par o impar
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

//Detectar numero mayor o menor
let botonmayor = document.getElementById("botonmayor");
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

//Piedra Papel o Tijeras
function jugar(jugada) {
    let opciones = ["piedra", "papel", "tijeras"];
    let random = Math.floor(Math.random() * 3);
    let IA = opciones[random];
    let resultado = "empate"; 
    if (jugada == IA) {
        resultado = "empate";
    }
    else if ((jugada == "piedra" && IA == "tijeras") || (jugada == "tijeras" && IA == "papel") || (jugada == "papel" && IA == "tijeras"))
        resultado = "Victoria"
    else {
        resultado = "Derrota"
    }
    alert("Jugaste: " + jugada + "\nLa IA jugó: " + IA + "\nEl resultado es: " + resultado);
}


//Imagen en enlace
const preview = document.getElementById("preview-img");

document.querySelectorAll(".hover-img").forEach(link => {

    link.addEventListener("mouseenter", () => {
        const imgSrc = link.getAttribute("data-img");
        preview.innerHTML = `<img src="${imgSrc}">`;
        preview.style.display = "block";
    });

    link.addEventListener("mousemove", e => {
        preview.style.left = e.clientX + "px";
        preview.style.top = e.clientY + "px";
    });

    link.addEventListener("mouseleave", () => {
        preview.style.display = "none";
    });

});

function calcular(idNum1, idNum2, idResultado, operacion) {
    let num1 = Number(document.getElementById(idNum1).value);
    let num2 = Number(document.getElementById(idNum2).value);
    let resultado;

    if (operacion == "sumar") resultado = num1 + num2;
    else if (operacion == "restar") resultado = num1 - num2;
    else if (operacion == "multiplicar") resultado = num1 * num2;
    else if (operacion == "dividir") resultado = num1 / num2;

    document.getElementById(idResultado).innerHTML = "El resultado es " + resultado;
}

document.getElementById("sumar").addEventListener("click", function(){
    calcular("num+1", "num+2", "igual+1", "sumar");
});
document.getElementById("restar").addEventListener("click", function(){ 
    calcular("num-1", "num-2", "igual-1", "restar");
});
document.getElementById("multiplicar").addEventListener("click", function(){
    calcular("num*1", "num*2", "igual*1", "multiplicar");
});
document.getElementById("dividir").addEventListener("click", function(){
    calcular("num/1", "num/2", "igual/1", "dividir");
});
//Conversor de valores
function celsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
    let conversor = document.getElementById("convertirTemp");
    conversor.addEventListener("click",function(){
         let fahrenheit = document.getElementById("temperaturaF").value;
         let resultado = celsius(fahrenheit);
         if (resultado % 1 !== 0) {
             resultado = resultado.toFixed(2);}
             document.getElementById("temperaturaC").innerHTML = "La temperatura en C es " + resultado;
    })

   

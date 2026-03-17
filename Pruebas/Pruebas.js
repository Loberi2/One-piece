/* Boton para cambiar el color de fondo a azul al hacer click */
const boton = document.getElementById("boton");
boton.addEventListener("click", function() {
    boton.classList.toggle("azul");
});

// Cambiar boton de color
function ShowB2() {
    const boton2 = document.getElementById("boton2");
    const boton3 = document.getElementById("boton3");
    boton2.style.display = "none";
    boton3.style.display = "block";
}
// Detectar numero par o impar
const botonpar = document.getElementById("botonpar");
const par = document.getElementById("par");
const impar = document.getElementById("impar");

botonpar.addEventListener("click", function() { 
    const numero = document.getElementById("numero").value;
    if (numero == "") {
        par.classList.add("ocultar");
        impar.classList.add("ocultar")
    }   
    else if (numero % 2 == 0) {
            par.classList.remove("ocultar");
            impar.classList.add("ocultar");
    }
    else {
            impar.classList.remove("ocultar");
            par.classList.add("ocultar");   
    }

});   

//Detectar numero mayor o menor
const botonmayor = document.getElementById("botonmayor");
const mayor = document.getElementById("mayor");
const menor = document.getElementById("menor");

botonmayor.addEventListener("click", function() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
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

// Piedra Papel o Tijeras
function jugar(jugada) {
    const opciones = ["piedra", "papel", "tijeras"];
    const random = Math.floor(Math.random() * 3);
    const IA = opciones[random];
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
// CalcularS
function calcular(idNum1, idNum2, idResultado, operacion) {
    const num1 = Number(document.getElementById(idNum1).value);
    const num2 = Number(document.getElementById(idNum2).value);
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
// Funcion Flecha
document.getElementById("FlechaBoton").addEventListener("click",function(){ 
const a = document.getElementById("Flecha1").value;
const b = document.getElementById("Flecha2").value;
const add = (a, b) => a * b;
let result = add(Number(a),Number(b) );
document.getElementById("Flechaigual").innerHTML = "The product is: " + result
});
//Conversor de valores
    function celsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
    }

    const conversor = document.getElementById("convertirTemp");
    function CalcularResultado() {
         const fahrenheit = document.getElementById("temperaturaF").value;
         let resultado = celsius(fahrenheit);
         if (resultado % 1 !== 0) {
             resultado = resultado.toFixed(2);}
             return resultado
           
    };
    function mostrarResultado() {
        document.getElementById("temperaturaC").innerHTML = "La temperatura en C es " + CalcularResultado();
    }


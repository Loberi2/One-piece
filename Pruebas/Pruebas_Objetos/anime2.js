//Lo que hice antes pero mejor estructurado y de mejor manera
function Nota(personal, MAList) {
    this.personal = personal;
    this.MAList = MAList;
}

function Anime(nombre, imagen, personal, MAList, estudio) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.nota = new Nota(personal, MAList);
    this.estudio = estudio;
}

const animes = [
    new Anime("Yofukashi No uta", "Imagen_Anime/Yofukashi_No_Uta.jpg", 10, 8.14, "Lidenfilms"),
    new Anime("kill la kill", "Imagen_Anime/Kill_la_Kill.jpg", 9.5, 8.03, "Trigger"),
    new Anime("Lucky Star", "Imagen_Anime/Lucky_Star.jpg", 9.7, 7.76, "kyoto animation"),
    new Anime("Oshi no Ko", "Imagen_Anime/Oshi_No_Ko.jpg", 9.2, 8.55, "Doga Kobo"),
    new Anime("Bocchi The Rock", "Imagen_Anime/Bocchi_the_Rock.jpg", 10, 8.73, "CloverWorks")
];

// * Bucle 
let html = "";
// Clasificar por nota
animes.sort((a, b) => b.nota.personal - a.nota.personal);
animes.forEach(function(anime) {
    html += `
    <div class="ficha">
            ${anime.nombre ? `<p>Nombre: ${anime.nombre}</p>` : ""}
            ${anime.imagen ? `<img class="imagen" src="${anime.imagen}">` : ""}
            ${anime.nota?.personal ? `<p>Nota Personal: ${anime.nota.personal}</p>` : ""}
            ${anime.nota?.MAList ? `<p>Nota MAList: ${anime.nota.MAList}</p>` : ""}
            ${anime.estudio ? `<p>Estudio: ${anime.estudio}</p>` : ""}
        </div> 
        `;
});

document.getElementById("contenedor").innerHTML = html;

//Crear objetos aparte
function Persona(nombre, apellido, edad) {
this.nombre = nombre;
this.apellido = apellido;
this.edad = edad
// * Los constructores tambien pueden tener funciones 
this.completo = function() {
    return this.nombre + " " + this.apellido
}
}

const Nahuel = new Persona("Nahuel", "Huart", 19);
const Kevin = new Persona("Kevin", "Perez", 27);

// * Con esto creo un objeto aparte 
Persona.prototype.ciudad = "Acapulco"
document.getElementById("Pruebas1").innerHTML = Nahuel.nombre + " " +Nahuel.apellido + " " + Nahuel.edad + " " + Nahuel.ciudad;

// Usando una funcion dentro
document.getElementById("Pruebas2").innerHTML = Nahuel.completo();

// Usando una funcion en un objeto creado
    // *Funcion que cambia el nombre por lo que pongamos de esa persona en especifico
Nahuel.cambiarNombre = function (nombre2) {
    this.nombre = nombre2;
}
    //* El nombre a cambiar
Nahuel.cambiarNombre("Jamon");
document.getElementById("Pruebas3").innerHTML = Nahuel.nombre;
// Estas 2 lineas aqui no funcionan
// !Kevin.cambiarNombre("KevSG")
// !document.getElementById("Pruebas4").innerHTML = Kevin.nombre

//Usando prototype para hacer que nombre siempre sea el que pongamos, da igual el objeto en el que lo estemos usandolo
Persona.prototype.changeName = function(nombre3) {
    this.nombre = nombre3;
}
Nahuel.changeName("Kevin");
document.getElementById("Pruebas5").innerHTML = Nahuel.nombre;
// Aqui a diferencia de arriba si funciona, ya que esta funcion toma el constructor y la propiedad del objeto
Kevin.changeName("KevSG")
document.getElementById("Pruebas6").innerHTML = Kevin.nombre
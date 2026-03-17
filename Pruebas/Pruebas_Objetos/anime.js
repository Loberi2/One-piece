const animes = [
    // Todo Yofukashi no uta
    {
        nombre: "Yofukashi No uta",
        imagen: "Imagen_Anime/Yofukashi_No_Uta.jpg",
        nota: {
            personal: 10,
            MAList: 8.14
        },
        estudio: "Lidenfilms"
    },
    // Todo Kill la Kill
    {
        nombre: "kill la kill",
        imagen: "Imagen_Anime/Kill_la_Kill.jpg",
        nota: {
            personal: 9.5,
            MAList: 8.03
        },
        estudio: "Trigger"
    },
    // Todo Lucky Star
    {
        nombre: "Lucky Star",
        imagen: "Imagen_Anime/Lucky_Star.jpg",
        nota: {
            personal: 9.7,
            MAList: 7.76, 
        },
        estudio: "kyoto animation"
    },
    // Todo Oshi no ko
    {
        nombre: "Oshi no Ko",
        imagen:"Imagen_Anime/Oshi_No_Ko.jpg",
        nota: {
            personal: 9.2,
            MAList: 8.55,
        },
        estudio:"Doga Kobo"
    },
    // Todo Bocchi The Rock 
    {
        nombre: "Bocchi The Rock",
        imagen: "Imagen_Anime/Bocchi_the_Rock.jpg",
        nota: {
            personal: 10,
            MAList: 8.73,
        },
        estudio: "CloverWorks"
    }
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

// Ajuntar objetos
// * Con un bucle
const persona = {
    nombre: "Nahuel",
    apellido: "Huart",
    edad: 19,
// * Creo funcion para que funcione dentro de la array 
    completoF: function() {
        return (this.nombre + " " + this.apellido + " " + this.edad)
    }
};

// Creo un objeto con una función que me ajunta tanto el nombre como el apellido
    persona.completo = function() {
        return (this.nombre + " " + this.apellido)
    }
    document.getElementById("Pruebas1").innerHTML = persona.completo()

//Mayusculas
    persona.completomayus = function() {
        return (this.nombre + " " + this.apellido).toUpperCase();
    }
    document.getElementById("Pruebas2").innerHTML = persona.completomayus()

// Con la funcion dentro del Array 
    document.getElementById("Pruebas3").innerHTML = persona.completoF();

// Con Object.Value
    //* Creo una variable que crea una array a usando los datos del array persona.
    const objectValue = Object.values(persona).filter(valor => typeof valor !== "function");
    //* Ahora hago que ese Array pase a ser un string para que se plasme
    const texto = objectValue.toString();

    document.getElementById("Pruebas4").innerHTML = texto;

// Desde un JSON
    let JSONTexto = JSON.stringify(persona)

    document.getElementById("Pruebas5").innerHTML = JSONTexto; 


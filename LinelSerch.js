//lineal Serch

const personas = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "María" },
    { id: 3, nombre: "Pedro" },
    { id: 4, nombre: "Ana" },
    { id: 5, nombre: "Luis" },
];

function buscarPersona(personas, idPersona) {
    for (let indice = 0; indice < personas.length; indice++) {
        if (personas[indice].id === idPersona) {
            return personas[indice].nombre;
        }
    }
    return "Lo sentimos, pero la persona no fue encontrada.";
}

debugger; // Punto de ruptura para iniciar la depuración
console.log(buscarPersona(personas, 3));

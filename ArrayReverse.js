//Codigo 1 arry reverse 

const array = [1, 2, 3, 4, 5];

console.log("Original array:", array);

const reversedArray = reverseArray(array);

console.log("Reversed array:", reversedArray);

function reverseArray(array) {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
console.log("Reversed array:", reversedArray);


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

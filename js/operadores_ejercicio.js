function notarandom() {
    return Math.floor(Math.random() * 81) + 20; // Genera un número entre 2 y 10
}

// Array de objetos con nombres y notas inicializadas en 0
const Item = [
    { nombre: 'Juan', nota: 0 },
    { nombre: 'Andres', nota: 0 },
    { nombre: 'Julio', nota: 0 },
    { nombre: 'Arturo', nota: 0 },
    { nombre: 'Andrea', nota: 0 },
    { nombre: 'Ying', nota: 0 },
    { nombre: 'Mariel', nota: 0 },
    { nombre: 'Diana', nota: 0 },
    { nombre: 'Angela', nota: 0 },
    { nombre: 'Leo', nota: 0 }
];

// Generar las notas aleatorias para cada estudiante en el array Item
Item.forEach(estudiante => {
    estudiante.nota = notarandom();
});

// Mostrar el array actualizado con nombres y notas aleatorias
console.log(Item);

// Calcular la nota mayor, menor y promedio
const notas = Item.map(estudiante => estudiante.nota);
const notaMayor = Math.max(...notas);
const notaMenor = Math.min(...notas);
const promedioNotas = notas.reduce((total, nota) => total + nota, 0) / notas.length;

// Encontrar al estudiante con la nota mayor y menor
const estudianteMayorNota = Item.find(estudiante => estudiante.nota === notaMayor);
const estudianteMenorNota = Item.find(estudiante => estudiante.nota === notaMenor);

// Mostrar la nota mayor, menor y promedio junto con los estudiantes correspondientes
console.log(`El estudiante con la mayor nota (${notaMayor}) es: ${estudianteMayorNota.nombre}`);
console.log(`El estudiante con la menor nota (${notaMenor}) es: ${estudianteMenorNota.nombre}`);
console.log("Promedio de notas:", promedioNotas);

// Clasificar a los estudiantes según sus notas
// const clasificacion = Item.map(estudiante => {
//     let clasif;
//     switch(true) {
//         case (estudiante.nota >= 2 && estudiante.nota < 5):
//             clasif = 'Insuficiente';
//             break;
//         case (estudiante.nota >= 5 && estudiante.nota < 7):
//             clasif = 'Suficiente';
//             break;
//         case (estudiante.nota >= 7 && estudiante.nota < 9):
//             clasif = 'Bien';
//             break;
//         case (estudiante.nota === 9):
//             clasif = 'Notable';
//             break;
//         default:
//             clasif = 'Sobresaliente';
//     }
//     return { nombre: estudiante.nombre, nota: estudiante.nota, clasificacion: clasif };
// });
// // Mostrar la clasificación de los estudiantes
// console.log("Clasificación de los estudiantes:");
// console.log(clasificacion);









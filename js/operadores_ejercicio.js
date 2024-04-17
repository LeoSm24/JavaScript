// Array de nombres
let nombresDisponibles = ["Juan", "Leo", "Zahir", "Jefferson", "Samuel", "Erika", "Daniela", "Maria", "Pedro", "Laura"];

// Función para seleccionar un nombre aleatorio y eliminarlo del array de nombres disponibles
function seleccionarNombreAleatorio() {
    const indice = Math.floor(Math.random() * nombresDisponibles.length);
    const nombreSeleccionado = nombresDisponibles.splice(indice, 1)[0];
    return nombreSeleccionado;
}

// Generar un array con 10 elementos donde el nombre es aleatorio y la nota es aleatoria entre 20 y 100
let estudiantes = Array.from({ length: 10 }, () => ({
    nombre: seleccionarNombreAleatorio(),
    nota: Math.floor(Math.random() * (100 - 20 + 1)) + 20
}));

// Mostrar el array generado
console.log("Estudiantes:");
console.log(estudiantes);

// Encontrar el estudiante con la nota mayor y menor
let estudianteMayorNota = estudiantes.reduce((estudianteAnterior, estudianteActual) => {
    return estudianteAnterior.nota > estudianteActual.nota ? estudianteAnterior : estudianteActual;
});

let estudianteMenorNota = estudiantes.reduce((estudianteAnterior, estudianteActual) => {
    return estudianteAnterior.nota < estudianteActual.nota ? estudianteAnterior : estudianteActual;
});

// Calcular el promedio de los estudiantes con mayor y menor nota
let promedioMayorNota = estudianteMayorNota.nota;
let promedioMenorNota = estudianteMenorNota.nota;

// Asignar el nombre del estudiante con la mayor y menor nota
estudianteMayorNota = `${estudianteMayorNota.nombre} (nota: ${estudianteMayorNota.nota})`;
estudianteMenorNota = `${estudianteMenorNota.nombre} (nota: ${estudianteMenorNota.nota})`;

console.log("Estudiante con la nota mayor:");
console.log(estudianteMayorNota);
console.log("Estudiante con la nota menor:");
console.log(estudianteMenorNota);
console.log("Promedio del estudiante con mayor nota:", promedioMayorNota);
console.log("Promedio del estudiante con menor nota:", promedioMenorNota);

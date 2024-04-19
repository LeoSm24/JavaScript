// nombres = ['Juan', 'María', 'José', 'Ana', 'Luis', 'Laura', 'Carlos', 'Sandra', 'Diego', 'Gabriela', 'Daniel', 'Andrea', 'Roberto', 'Patricia', 'Jorge', 'Natalia', 'Miguel', 'Alejandra', 'Fernando', 'Adriana'];
// apellidos = ['Pérez', 'González', 'Rodríguez', 'Hernández', 'Martínez', 'Gómez', 'López', 'Díaz', 'Sánchez', 'Ramírez', 'Torres', 'Vázquez', 'Castro', 'Núñez', 'Morales', 'Ruiz', 'Silva', 'Medina', 'Ortega'];

// function obtenerElementoAleatorioYEliminar(array) {
//     indiceAleatorio = Math.floor(Math.random() * array.length);
//     elementoAleatorio = array.splice(indiceAleatorio, 1)[0];
//     return elementoAleatorio;
// }

// function generarNombresCompletos(cantidad) {
//     nombresCompletos = [];
//     nombresDisponibles = nombres.slice();
//     apellidosDisponibles = apellidos.slice();

//     for (let i = 0; i < cantidad; i++) {
//         nombre = obtenerElementoAleatorioYEliminar(nombresDisponibles);
//         apellido = obtenerElementoAleatorioYEliminar(apellidosDisponibles);
//         nombresCompletos.push(`${nombre} ${apellido}`);
//     }
//     return nombresCompletos;
// }

// let nombresAleatorios = generarNombresCompletos(20);
// console.log(nombresAleatorios);


const NELEMENTOS = 10;


let nombres =['Juan', 'María', 'José', 'Ana', 'Luis', 'Laura', 'Carlos', 'Sandra', 'Diego', 'Gabriela', 'Daniel', 'Andrea', 'Roberto', 'Patricia', 'Jorge', 'Natalia', 'Miguel', 'Alejandra', 'Fernando', 'Adriana'];


let apellidos =['Pérez', 'González', 'Rodríguez', 'Hernández', 'Martínez', 'Gómez', 'López', 'Díaz', 'Sánchez', 'Ramírez', 'Torres', 'Vázquez', 'Castro', 'Núñez', 'Morales', 'Ruiz', 'Silva', 'Medina', 'Ortega'];

let nomape=[];
function generarNombre(){
    let nomal, apeal
    for (let $i=0;$i<NELEMENTOS;$i++){
        nomal = (nombres[Math.floor(Math.random()*(nombres.length-1))]);
        console.log(" ");
        apeal = (apellidos[Math.floor(Math.random()*(apellidos.length-1))]);
        nomape.push(nomal, " ", apeal)
    }
    
}

function imprimir(){
    nomape.forEach(persona=>{
        console.log(persona)
    });

}
generarNombre();
imprimir();
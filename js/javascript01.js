var mensaje="Imprimir en consola";
console.log(mensaje);

var numero1 = prompt("Por favor, introduce el primer número:");

// Convertir el primer número a un número entero
numero1 = parseInt(numero1);

// Solicitar al usuario el segundo número
var numero2 = prompt("Por favor, introduce el segundo número:");

// Convertir el segundo número a un número entero
numero2 = parseInt(numero2);

// Calcular la suma de los dos números
var suma = numero1 + numero2;

// Imprimir la suma por consola
console.log("La suma de", numero1, "y", numero2, "es:", suma);

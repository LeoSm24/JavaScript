//const INTERVALO=10;

//console.log("Intervalo sera de " + INTERVALO + " minutos con una constante");
//INTERVALO=15;//no se puede permitir por ser constante

/*var intervalo =15;
console.log("Intervalo sera de " + intervalo + " minutos con una variable");
intervalo=20;
console.log("Intervalo sera de " + intervalo + " minutos con una variable modificada");
*/
/*
let varb=true;//booleano
let varn=3.141592;//numerico
let vars="Texto string";//cadena
let var1;//indefinido

console.log("Para la variable varb=" + varb + " con el tipo de dato=" + typeof varb);
console.log("Para la variable varn=" + varn + " con el tipo de dato=" + typeof varn);
console.log("Para la variable vars=" + vars + " con el tipo de dato=" + typeof vars);
console.log("Para la variable var1=" + var1 + " con el tipo de dato=" + typeof var1);

var1=vars;
console.log("Para la variable var1=" + var1 + " con el tipo de dato=" + typeof var1);
*/
/*
//Realizar las siguientes conversiones implicitas.
let var1=15.25;
let var2=0;
let var3=true;
let var4="100";
let varx;

// Asignación de var1 a varx
varx = var1;
console.log("Para la variable varx=" + varx + " con el tipo de dato=" + typeof varx); // Para la variable varx=15.25 con el tipo de dato=number

// Asignación de var2 a varx
varx = var2;
console.log("Para la variable varx=" + varx + " con el tipo de dato=" + typeof varx); //  Para la variable varx=0 con el tipo de dato=number

// Asignación de var3 a varx
varx = var3;
console.log("Para la variable varx=" + varx + " con el tipo de dato=" + typeof varx); //  Para la variable varx=true con el tipo de dato=boolean

// Asignación de var4 a varx
varx = var4;
console.log("Para la variable varx=" + varx + " con el tipo de dato=" + typeof varx); //  Para la variable varx=100 con el tipo de dato=string
*/

//cuales de estas asignaciones cuales son permitidas o si todas son permitidas


//conversiones explicitas.

let var1 = 15.25;
let var2 = 0;
let var3 = true;
let var4 = "100";
let varx;

// Conversión explícita de var1 a string
varx = var2+String(var1);
console.log("Para la variable varx=" + varx + " con el tipo de dato=" + typeof varx); // Para la variable varx=15.25 con el tipo de dato=string

// Conversión explícita de var2 a string
varx = var1+String(var2);
console.log("Para la variable varx=" + varx + " con el tipo de dato=" + typeof varx); //  Para la variable varx=0 con el tipo de dato=string

// Conversión explícita de var3 a string
varx = var3+Boolean(var2);
console.log("Para la variable varx=" + varx + " con el tipo de dato=" + typeof varx); //  Para la variable varx=true con el tipo de dato=number. investigar por que no cambia

// Conversión explícita de var4 a número
varx = var1+Number(var4);
console.log("Para la variable varx=" + varx + " con el tipo de dato=" + typeof varx); // Para la variable varx=100 con el tipo de dato=number

//String, Number
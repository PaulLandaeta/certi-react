// Tipos variable

// bool 
let cancelado = true;
console.log(cancelado);
console.log(typeof cancelado);

// number
let  edad = 15;
let dinero = 10.5
console.log(typeof edad);
console.log(typeof dinero);

// cadenas 

let nombre = "paul";
console.log(nombre);
console.log(typeof nombre);

//BigInt 
// averiguar para que sirve la n 
let edadGil = BigInt(1231231231);
let edadPaul = BigInt(15);
console.log(edadGil);
console.log(typeof edadGil);
console.log(edadGil+edadPaul);

// undefined 

let course;
console.log(course)

// null 
let nota = null;
console.log(null);
console.log(typeof null);

// Symbol 

let badani = Symbol("Pablo");
let acker = Symbol("Pablo");
console.log(badani);
console.log(acker);

if(badani.value === acker.value) {
    console.log("soon iguales");
} else {
    console.log("son diferentes");
}





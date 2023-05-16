// Iteradores
const profes = [
  "paul",
  "alexis",
  "eynar",
  "hernan",
  "Gil",
  "ricardo",
  "adro",
  "panda",
];

const ob = profes.forEach(profe => profe);

const ob2 = profes.map(profe => profe);
console.log(ob);
console.log(ob2);



const libros = [
  { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', paginas: 512 },
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 432 },
  { titulo: 'El código Da Vinci', autor: 'Dan Brown', paginas: 454 },
  { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', paginas: 1178 }
];

const librosCortos = libros.filter(libro =>  libro.paginas <= 500 );

console.log(librosCortos);
// function (libro ) {
//     return libro.paginas > 500;
// }

// const f = libro => {
//   return libro.paginas > 500;
// }

const colores = ["roja", "lila", "amarillo"]; 
const hayRojo = (colores.filter(color => color === 'rojo')).length > 0;
console.log(hayRojo);

// includes 

if(colores.includes('roja')) {
  console.log("Si hay");
} else {
  console.log("No hay");
}

const numeros = [2,3,4,6,3,1,3,4,6,7,8];

if(numeros.some(numero => numero%2 === 0)) {
  console.log('existe un entero par');
} else {
  console.log('no existe un entero par');
}

if(numeros.every(numero => numero%2 === 0)) {
  console.log('todos son pares');
} else {
  console.log('no todos son pares');
}

const total = numeros.reduce(
  (acumulador, numero) => acumulador + numero, 0
  );
console.log(total);


if ( '1' === 1 ) {
  console.log('son inguales');
}
console.log(typeof '1');
console.log(typeof 1);
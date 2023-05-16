// Objetos 
const nombre = "hugo";
const apellido = "apaza";
const edad = 20;

const estudiante = {
     nombre: "hugo",
     apellido : "apaza",
     edad :20
}
console.log(estudiante);
console.table(estudiante);



// congelar un objeto 
// Object.freeze(estudiante);

estudiante.edad = 21;

console.table(estudiante);

// modificar el objeto 
estudiante.promedio = 97.6

console.table(estudiante);

// eliminar 
delete estudiante.edad;

console.table(estudiante);

// Si queremos bloquear eliminar o agregar atributos 

// Object.seal(estudiante);
estudiante.faltas = 2;
delete estudiante.apellido;
console.table(estudiante);


// Destructurar objetos 

// const nombreEstudiante = estudiante.nombre;
const { promedio } = estudiante;
console.log(promedio);
const { nombre: nombreEstudiante, apellido: apellidoEstudiante } = estudiante;

console.log(nombreEstudiante, apellidoEstudiante);

// combinar objetos 

const auto = {
     placa: "573HYI",
     marca: "Mazda"
}

const conductor = {
     nombre: "Jose ",
     licencia: "567890" 
}
const year = 2023;
const nuevoObjeto = {
     placa: auto.placa,
     marca: auto.marca,
     nombre: conductor.nombre,
     year
};
console.log(nuevoObjeto); 
// const {placa } = auto;
const { placa, ...nuevoObjeto2} = auto;
console.log(nuevoObjeto2);
const objeto2 = {
     ...nuevoObjeto2,
     licencia: '78907890',
     ...conductor,
     year
};
console.table(objeto2);


// Objeto no existe array 

const array  = [2,4,"paul", function () {}, 3.4];

// destructurar arrays 

const [lanota, practica, profe,f, pi] = array;

console.log(pi);
console.log(typeof f);
const objeto3 = [...array, {...objeto2}, 2];
console.log(objeto3);






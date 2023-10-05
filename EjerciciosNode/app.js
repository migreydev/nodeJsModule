const math = require("./math");
const persona = require("./person");
const generarColorAleatorio = require("./randomColor");
const color = require("./randomColor");

math.sumar(5,5);
math.restar(3,2);
math.multiplicar(5,3);
math.dividir(5,1);


const miPersona= Object.create(persona);
console.log('Nombre:', miPersona.nombre);

const randomColor = generarColorAleatorio();
console.log(randomColor);



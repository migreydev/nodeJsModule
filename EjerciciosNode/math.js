//1. Crear y Exportar un Modulo 

// math.js

module.exports = {
  sumar(numero1, numero2) {
    let resultado = numero1 + numero2;
    console.log(resultado);
  },

  restar(numero1, numero2) {
    let resultado = numero1 - numero2;
    console.log(resultado);
  },

  multiplicar(numero1, numero2) {
    let resultado = numero1 * numero2;
    console.log(resultado);
  },

  dividir(numero1, numero2) {
    let resultado = numero1 / numero2;
    console.log(resultado);
  }
};



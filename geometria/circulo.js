
//Módulos Anidados:

function calcularArea(radio){
    let area = Math.PI * radio * radio;

    return area;
}

function calcularCircunferencia(radio){
    let circunferencia = 2 * Math.PI * radio;

    return circunferencia;
}

module.exports = {
    calcularArea,
    calcularCircunferencia
}

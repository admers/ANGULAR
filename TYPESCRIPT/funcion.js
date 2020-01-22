function mostrar() {
    var num1 = 5;
    var num2 = 10;
    var total = num1 + num2;
    console.log(total);
    //return total;
}
//console.log(mostrar());
mostrar();
mostrar();
mostrar();
//FUNCION CON PARAMETRO
function mostrarMsm(mensaje) {
    console.log(mensaje);
}
mostrarMsm("es la funcion con parametro");
mostrarMsm("DE LA FUNCION");
//FUNCION DE DEVOLVER UN DATO
function multiplicar(nume1, nume2) {
    var total = nume1 * nume2;
    return total;
}
var numeroResl = 0;
numeroResl = multiplicar(10, 12);
console.log(numeroResl);

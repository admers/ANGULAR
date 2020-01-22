
function mostrar() {

    var num1: number = 5;
    var num2: number =10;

    var  total: number = num1+num2;

console.log(total)
    //return total;
}


//console.log(mostrar());
mostrar();
mostrar();
mostrar();
//FUNCION CON PARAMETRO

function mostrarMsm(mensaje:string) {

    console.log(mensaje)
}

mostrarMsm("es la funcion con parametro");
mostrarMsm("DE LA FUNCION");

//FUNCION DE DEVOLVER UN DATO

function multiplicar(nume1:number , nume2:number):number {

    var total=nume1*nume2;
    return  total;

}

var numeroResl: number = 0;

numeroResl = multiplicar(10,12);
console.log(numeroResl)
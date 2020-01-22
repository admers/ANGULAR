/*var nombres: string[] = ["ana","maria","juana"];
nombres.push("mARIA")

console.log(nombres)*/

interface Alumno {

    nombre: string;
    apellido: string;

}

var alumno: Alumno[] = [];

var ana1:Alumno = {
    nombre: "ana",
    apellido:"Quispe"
}

/*alumno.push(
    {
        nombre:"Admers",
        apellido: "Vargas quispe"

    }
)*/
alumno.push(ana1)
console.log(alumno)
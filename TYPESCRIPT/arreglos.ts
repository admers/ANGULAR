interface Alumno {
    nombre: string,
    edad: number
}

var listDeAlumnos : Array<Alumno> = [
    {
        nombre: "admerson",
        edad:  15
    },
    {
        nombre: "ana",
        edad: 18
    },
    {
        nombre: "juana",
        edad: 28
    }
]

console.log(listDeAlumnos[2])
var listadoDeNombres: Array<string> = ["juana","ana","gabriel","alicia"]
var listadoDeNumeros: Array<number> = [1,45,13,54]

const cont= document.getElementById("cont");
const divp = document.createElement('div');

for (var i = 0; i<listDeAlumnos.length;i++){
    divp.innerHTML += `
            <div class="card text-center mb-4">
                <div class="card-body">
                    
                    <strong>Product</strong>:${listDeAlumnos[i].nombre+" Edad: "+listDeAlumnos[i].edad}
                </div>
            </div>
        `;
}
cont.appendChild(divp);
var listDeAlumnos = [
    {
        nombre: "admerson",
        edad: 15
    },
    {
        nombre: "ana",
        edad: 18
    },
    {
        nombre: "juana",
        edad: 28
    }
];
console.log(listDeAlumnos[2]);
var listadoDeNombres = ["juana", "ana", "gabriel", "alicia"];
var listadoDeNumeros = [1, 45, 13, 54];
var cont = document.getElementById("cont");
var divp = document.createElement('div');
for (var i = 0; i < listDeAlumnos.length; i++) {
    divp.innerHTML += "\n            <div class=\"card text-center mb-4\">\n                <div class=\"card-body\">\n                    \n                    <strong>Product</strong>:" + (listDeAlumnos[i].nombre + " Edad: " + listDeAlumnos[i].edad) + "\n                </div>\n            </div>\n        ";
}
cont.appendChild(divp);

interface Usuario {
    nombre: string,
    apellido:string

}

var listDeUsuarios: Array<Usuario>  = [
    {
        nombre: "Admer",
        apellido: "Vargas"
    },{
        nombre: "Juana",
        apellido: "Vargas"
    },{
        nombre: "Maribel",
        apellido: "Vargas"
    }

]

for (let position in listDeUsuarios) {
    console.log(listDeUsuarios[position].nombre)
}
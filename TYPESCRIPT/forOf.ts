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

console.log(listDeUsuarios)

for (let USUARIO of listDeUsuarios) {
    console.log(USUARIO.nombre)
}

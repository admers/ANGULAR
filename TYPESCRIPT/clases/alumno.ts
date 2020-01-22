class Alumno {
    private nombre:string;
    private apellido:string;
    private peso:number;

    constructor() {
        this.mensaje();
    }

    private mensaje():void{
        console.log("Holis: ",this.nombre+" "+this.apellido+" "+this.peso+" kg");
    }
    asignar(nombreAg:string, apellidoAg:string, pesoAg:number){
        this.nombre=nombreAg;
        this.apellido = apellidoAg;
        this.peso=pesoAg;
       // this.mensaje();
    }

}

var alumno1:Alumno = new Alumno();
/*
alumno1.apellido = 'Cardenas';
alumno1.peso= 12;*/

alumno1.asignar("Noe","Vargas ccopa",45);
//alumno1.nombre='juan';
//alumno1.mensaje();
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.mensaje();
    }
    Alumno.prototype.mensaje = function () {
        console.log("Holis: ", this.nombre + " " + this.apellido + " " + this.peso + " kg");
    };
    Alumno.prototype.asignar = function (nombreAg, apellidoAg, pesoAg) {
        this.nombre = nombreAg;
        this.apellido = apellidoAg;
        this.peso = pesoAg;
        // this.mensaje();
    };
    return Alumno;
}());
var alumno1 = new Alumno();
/*
alumno1.apellido = 'Cardenas';
alumno1.peso= 12;*/
alumno1.asignar("Noe", "Vargas ccopa", 45);
//alumno1.nombre='juan';
//alumno1.mensaje();

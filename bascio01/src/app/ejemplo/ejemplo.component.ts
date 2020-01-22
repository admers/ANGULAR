import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre: string;
  apellido: string;
  excelencia: boolean;

  constructor() {
    this.nombre = this.nombre;
    this.apellido = this.apellido;
    this.excelencia = this.excelencia;
  }
}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  alumnoss: Alumno = new Alumno();
  listadoAlumnos: Array<Alumno> = new Array<Alumno>();

  constructor() { }

  ngOnInit() {
  }

  agregar(){
    this.listadoAlumnos.push({
      nombre: this.alumnoss.nombre,
      apellido: this.alumnoss.apellido,
      excelencia:this.alumnoss.excelencia
    });
    this.alumnoss.nombre = '';
    this.alumnoss.apellido = '';
    this.alumnoss.excelencia = false;
    console.log(this.listadoAlumnos);
  }

}

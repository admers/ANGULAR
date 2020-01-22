import { Component, OnInit } from '@angular/core';


interface Producto {
  nombre: string;
  stock: number;
  fabricante: string;
  fVence: Date;
  esImportante: boolean;
  textBig: boolean;

}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
    cargando: boolean = true;
    nombre: Array<string> = ["MAria","Juan","Alicia","Yuli"];

    productos: Array<Producto> = [
      {
        nombre: 'Arroz',
        stock: 15,
        fabricante: 'FyC',
        fVence: new Date('12/12/2020'),
        esImportante: true,
        textBig: true
      },
      {
        nombre: 'Papa',
        stock: 55,
        fabricante: 'Distribuidor de Papas',
        fVence: new Date('02/10/2020'),
        esImportante:false,
        textBig: true
      },
      {
        nombre: 'Maiz',
        stock: 10,
        fabricante: 'Distribuidor de Papas',
        fVence: new Date('05/10/2020'),
        esImportante:true,
        textBig: false
      }
    ];

    pestana: string = '';

    mostrarCuadrado: boolean = false;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

  Mcargando(){
    this.cargando = true;
  }

  alternar(){
    this.cargando = !this.cargando ;
  }

  cambiarPestana(pestanas: string){
    this.pestana = pestanas;
  }
  alternarFondo(){
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }

}

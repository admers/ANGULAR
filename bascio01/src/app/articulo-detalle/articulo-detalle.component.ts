import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Articulo} from '../models/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
  articulo: Articulo;
 /* nombre: string ;
  precio: number;
  descripcion: string;*/

  // constructor(private ruta: ActivatedRoute) { }
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {

    // this.articulo = this.ruta.snapshot.params.articulo;
    // this.articulo  = this.rutaActiva.snapshot.params.articulo;
    // console.log(JSON.parse(this.rutaActiva.snapshot.params.articulo));

    this.articulo = JSON.parse(this.rutaActiva.snapshot.params.articulo);
    // console.log(JSON.parse(this.rutaActiva.snapshot.params.articulo));
   /*this.nombre = this.ruta.snapshot.params.nombre;
   this.descripcion = this.ruta.snapshot.params.descripcion;
   this.precio = this.ruta.snapshot.params.precio;*/

  }

}

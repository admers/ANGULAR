import { Component, OnInit } from '@angular/core';
import {Articulo} from '../models/articulo';
import {Router} from '@angular/router';




@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulo: Array<Articulo> = new Array<Articulo>();

  constructor(private ruta: Router) {}

  ngOnInit() {

    this.articulo.push(
      { nombre: 'Television',
      descripcion: 'Es una television de 42 p en full 4k',
      precio: 500,
        stock: 12,
        precioMayorista: 15
      },
      {
        nombre: 'Celular',
        descripcion: 'Celular de gama alta con una camara de 24 px',
        precio: 450,
        stock: 20,
        precioMayorista: 250
      },
      {
        nombre: 'Lecuadora',
        descripcion: 'Lecuadora de tiempo de vida 5 años',
        precio: 200,
        stock: 50,
        precioMayorista: 150
      },
      {
        nombre: 'Laptop',
        descripcion: 'Laptop gamer ',
        precio: 700,
        stock: 10,
        precioMayorista: 500
      }
    )

  }

  pasarParametro(articulorRecibido: Articulo)
  {
     // console.log(articulorRecibido);
    // this.ruta.navigate(['articuloDetalle'], { articulo: JSON.stringify(articulorRecibido) });
    this.ruta.navigate(['articuloDetalle', { articulo: JSON.stringify(articulorRecibido)}]);

  }

}

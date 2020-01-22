import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../servicios/articulos.service';
import {Articulo} from '../modelo/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {

  articuloD: Articulo = new  Articulo();

  constructor(private ArticuloInyectado: ArticulosService) { }

  ngOnInit() {
    this.articuloD = this.ArticuloInyectado.articulo;
  }

}

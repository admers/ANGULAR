import { Component, OnInit } from '@angular/core';
import {Articulo} from '../modelo/articulo';
import {Users} from '../modelo/Users';
import {ArticulosService} from '../servicios/articulos.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {

  articuloD: Articulo = new Articulo();
  usuarioD: Users = new Users();

  constructor(private ArticuloInyectado: ArticulosService) {
    this.articuloD = this.ArticuloInyectado.articulo;
  }

  ngOnInit() {
    // Sacamos el Id del articulo  this.articuloD.userId para tal usuario pertenece

    this.ArticuloInyectado.leerUsuario(this.articuloD.userId).subscribe((usuadioDesdeApi) => {
     this.usuarioD = usuadioDesdeApi;
    });
  }

}

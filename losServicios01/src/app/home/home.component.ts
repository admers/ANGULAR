import { Component, OnInit } from '@angular/core';
import {Articulo} from '../modelo/articulo';
import {UsuarioService} from '../servicios/usuario.service';
import {ArticulosService} from '../servicios/articulos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articulos: Array<Articulo> = new  Array<Articulo>();

  constructor(private UsuarioInyectado: UsuarioService, private ArticuloInyectado: ArticulosService,
              private Ruta: Router) { }

  ngOnInit() {
    this.ArticuloInyectado.leerNoticias().subscribe((articulosDesdeApi) => {
      this.articulos = articulosDesdeApi;
    });
  }

  irAlDetalle(articulo: Articulo){
    this.ArticuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('/articulo-detalle');
  }

}

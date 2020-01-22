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

  constructor( private UsuarioInyectado: UsuarioService, private ArticuloInyectado: ArticulosService,
               private Ruta: Router) { }

  ngOnInit() {

    this.articulos.push(
      {
      titulo: 'UNAJMA',
      descripcion: 'Es la universidad Nacional Jose Maria Arquedas En la provincia de Andahuaylas',
      fecha: new Date('12-12-2019'),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    },
    {
      titulo: 'ANGULAR DE CURSO',
      descripcion: 'Es un framework de desarrollo de sistemas avanzados o software robustos',
      fecha: new Date('08-12-2019'),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    },
    {
      titulo: 'ANGULAR DE CURSO 2',
      descripcion: 'Es un framework de desarrollo de sistemas avanzados o software robustos',
      fecha: new Date('10-10-2019'),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    }

    );
  }


  irAlDetalle(articuloo: Articulo){
    this.ArticuloInyectado.articulo = articuloo
    this.Ruta.navigateByUrl('/articulo-detalle');

  }
}

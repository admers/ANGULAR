import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../servicios/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  constructor(private UsuarioIyectado: UsuarioService ) { }

  ngOnInit() {

    console.log(this.UsuarioIyectado.usuario.nombre);
}

  cambiarNombre(){
    this.UsuarioIyectado.usuario.nombre = 'Ana';
   // this.UsuarioIyectado.usuario.apellido = 'Quispe Quispe';

  }

}

import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(private  UsuarioInyectadoPerfil: UsuarioService) { }

  ngOnInit() {

  }

  cambiarNombre(){
    this.UsuarioInyectadoPerfil.usuario.nombre = 'Maria';
    this.UsuarioInyectadoPerfil.usuario.apellido = 'Quispe';
  }

}

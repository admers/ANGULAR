import { Injectable } from '@angular/core';
import {Usuario} from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario = new Usuario();
  constructor() {
    this.usuario.usuarioId = 1;
    this.usuario.nombre = 'Juan 1';
    this.usuario.apellido = 'Cardenas Vargas';
    this.usuario.password = 'Cardenas';
  }

}

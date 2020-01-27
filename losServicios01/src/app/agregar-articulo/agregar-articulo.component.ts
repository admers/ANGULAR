import { Component, OnInit } from '@angular/core';
import {Users} from '../modelo/Users';
import {ArticulosService} from '../servicios/articulos.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Articulo} from '../modelo/articulo';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {

  usuarios: Array<Users> = new Array<Users>();
  formularioArticulo: FormGroup;
  articulo: Articulo = new  Articulo();

  constructor(private  articuloInyectado: ArticulosService, private foGenerado: FormBuilder) { }

  ngOnInit() {
    // creando formulario para poder crearlo el articulo

    this.formularioArticulo = this.foGenerado.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    });

    // Validando formulario para el button de enviar
    this.formularioArticulo


    // creacion de usuarios reicibidos
    this.articuloInyectado.leeTodosLosUsuarion().subscribe((usuarioRecibidos) => {
      this.usuarios = usuarioRecibidos;
    });
  }

  // Button para agregarlo

  agregar(){
   this.articulo = this.formularioArticulo.value as Articulo;
   this.articuloInyectado.guardarArticulo(this.articulo).subscribe((articuloRecibido) => {
    console.log(articuloRecibido);
     console.log('Felicidades has creado el primer articulo');
     // para reset del campo del articulo
     this.formularioArticulo.reset();
   });
  }

}

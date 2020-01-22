import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Usuario {
  nombre: string;
  correo: string;
  password: string;

}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  formularioCreado: FormGroup;
  esNuevo: boolean = true;
  usuarios: Array<Usuario> = Array<Usuario>();
  posicionEditar: number = -1;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario(){

    this.formularioCreado = this.formBuilder.group({
      nombre: ['carmen', Validators.required],
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])]

    });
  }

  agregar(){

    this.usuarios.push(this.formularioCreado.value as Usuario);
    this.formularioCreado.reset();

    // console.log(this.formularioCreado.value){
    // let  nombres = [ "Juan" , "Maria", "pedro"];
  }
  editar(){
    this.usuarios[this.posicionEditar].nombre = this.formularioCreado.value.nombre;
    this.usuarios[this.posicionEditar].correo = this.formularioCreado.value.correo;
    this.usuarios[this.posicionEditar].password = this.formularioCreado.value.password;
    this.formularioCreado.reset();
    this.esNuevo = true;
    this.posicionEditar = -1;
  }

  editarUsuario(posicion: number)
  {
    /*this.usuarios[posicion].nombre = 'A';
    this.usuarios[posicion].correo = 'A@gmail.com';
    this.usuarios[posicion].password = '123456789';*/
    // LLamamos la posicion de valor y ponemos en cada campo
    this.formularioCreado.setValue({
        nombre: this.usuarios[posicion].nombre,
        correo: this.usuarios[posicion].correo,
        password: this.usuarios[posicion].password
    });

    // posicion de editar
    this.posicionEditar = posicion;

    this.esNuevo = false;

  }

  eliminarUsuario(posicion: number){
    this.usuarios.splice(posicion, 1);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  nombre:string = 'Maria';
  apellido:string = 'Cardenas';
  alumno: any = {
    nombre:'Carlos',
    apellido:'Alhuay Vargas',
    edad:24
};
image:string = 'https://envato-shoebox-0.imgix.net/4457/3746-f383-11e1-952c-842b2b692e1a/2100722-011.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=3b4d4a0ba52403ad45ae309c575d8ddc';
inputNuevo:string = 'Hola soy un input de datos'
  correo:string = ''
  password:string = ''
  constructor() { }

  ngOnInit() {

  }

  ingresar(){
  console.log(this.correo);
  console.log(this.password);
  }

  llamarAlert(){
  alert('Ha echo doble click')
  }

  escribeModelo(){
  console.log(this.password)
  }

  escriberCorreo(){
  console.log(this.correo);
    this.password = this.correo;
  }

  escrbirInput(evento){
  console.log(evento.target.value)

    //escribir con target en un value
  }
  escrbirInput2(val:string){
  console.log(val)
    //escribir con target en un value
  }

}

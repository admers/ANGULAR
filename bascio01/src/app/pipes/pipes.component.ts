import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  titulo: string = 'Hola sOy un nuevo';
  dinero: number = 2400;
  ganancia: number = 0.51;
  fechav: Date = new Date('19-01-2019');
  fechaNacimiento: Date = new Date('05-06-2019');

  constructor() { }

  ngOnInit() {
  }

}

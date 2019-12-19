import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories: any = [];
  repository: IRepository;
  constructor() { }
  ngOnInit() {
    this.repository = {name: "Angular code for", descripcion:"Proyecto demo de cf"};

    setTimeout(() => {
      this.repositories=[
        {name: "Angular code for", descripcion:"Proyecto demo de cf"},
        {name: "Bootstrap", descripcion:"Preyecto de bootstrap"},
        {name: "Php ecommerce", descripcion:"Preyecto de ecommerce"},
        {name: "Ruby code", descripcion:"Preyecto de Ruby code"}
      ];
    }, 2000);
 }

  setMainRepository(repository) {
    this.repository = repository;
  }

}
interface IRepository {
  name:string,
  descripcion:string
}

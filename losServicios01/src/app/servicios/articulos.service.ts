import { Injectable } from '@angular/core';
import {Articulo} from '../modelo/articulo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../modelo/Users';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulo: Articulo = new Articulo();
  ruta: string = 'https://jsonplaceholder.typicode.com';

  constructor(private  http: HttpClient) { }


  leerNoticias(): Observable<Articulo[]>{
    return  this.http.get<Articulo[]>(this.ruta + '/posts');
  }

  leerUsuario(userioId: number): Observable<Users>{
    return this.http.get<Users>(this.ruta + '/users/' + userioId);

  }

}

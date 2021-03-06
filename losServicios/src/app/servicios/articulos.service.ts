import { Injectable } from '@angular/core';
import {Articulo} from '../modelo/articulo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../modelo/Users';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulo: Articulo = new Articulo();
  ruta: string = 'https://jsonplaceholder.typicode.com';
  constructor( private http: HttpClient ) { }

  leerNoticias(): Observable<Articulo[]>{
    return  this.http.get<Articulo[]>(this.ruta + '/posts');
  }
  // por que solo un id no mas vamos a pasarlo  POR ESO YA NO SE PONE EL ARRAY
  leerUsuario(userioId: number): Observable<User>{
    return  this.http.get<User>( this.ruta + '/users/' + userioId);
  }

  // Guardar el articulo

  guardarArticulo(articulo: Articulo): Observable<Articulo>
  {
    return  this.http.post<Articulo>(this.ruta + '/posts', articulo);
  }
}

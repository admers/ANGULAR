import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import {HttpClientModule} from '@angular/common/http';
import {ArticulosService} from './servicios/articulos.service';
import {UsuarioService} from './servicios/usuario.service';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HomeComponent,
    EncabezadoComponent,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArticulosService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

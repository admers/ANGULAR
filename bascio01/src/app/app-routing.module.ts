import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TitulosComponent} from './titulos/titulos.component';
import {DirectivaComponent} from './directiva/directiva.component';
import {EjemploComponent} from './ejemplo/ejemplo.component';
import {Pagina404Component} from './pagina404/pagina404.component';
import {PipesComponent} from './pipes/pipes.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {AgregarUsuarioComponent} from './usuarios/agregar-usuario/agregar-usuario.component';
import {EditarUsuarioComponent} from './usuarios/editar-usuario/editar-usuario.component';
import {ArticuloComponent} from './articulo/articulo.component';
import {ArticuloDetalleComponent} from './articulo-detalle/articulo-detalle.component';


const routes: Routes = [
  {path: '', component: TitulosComponent  },
  {path: 'directiva', component: DirectivaComponent  },
  {path: 'ejemplo', component: EjemploComponent  },
  {path: 'pipes', component: PipesComponent  },
  {
    path: 'usuarios', component: UsuariosComponent, children: [
      {path: 'agregar', component: AgregarUsuarioComponent },
      {path: 'editar', component: EditarUsuarioComponent  }
    ]
  },
  {path: 'articulo', component: ArticuloComponent},
/*
  {path: 'articuloDetalle/:nombre/:precio/:descripcion', component: ArticuloDetalleComponent},
*/
  {path: 'articuloDetalle', component: ArticuloDetalleComponent},
  // {path: 'articuloDetalle', component: ArticuloDetalleComponent},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

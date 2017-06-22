import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisContactosComponent } from '../mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from '../nuevo-contacto/nuevo-contacto.component';

// Definimos las rutas de la aplicación. Cada una de ellas tiene que tener una propiedad
// 'path', donde indicamos la ruta a navegar, y 'component' donde indicamos el componente
// de la ruta. La última ruta es una ruta comodín para los errores de ruta no encontrada.
const routes: Routes = [
  {
    path: 'mis-contactos',
    component: MisContactosComponent
  },
  {
    path: 'nuevo-contacto',
    component: NuevoContactoComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/mis-contactos'
  }
];

// Con 'RouterModule.forRoot()' regitramos rutas en el módulo.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

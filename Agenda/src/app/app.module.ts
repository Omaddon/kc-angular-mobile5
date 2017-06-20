import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from "./contactos.service";

@NgModule({
  // Indicamos todos los componentes, pipes y directivas de mi app.
  declarations: [
    AppComponent,
    ListaContactosComponent
  ],
  // Indicamos los módulos de los cuáles dependemos.
  imports: [
    BrowserModule
  ],
  // Indicamos los proveedores de todas aquellas piezas que sean susceptibles
  // de ser inyectadas como dependencias.
  providers: [
    ContactosService
  ],
  // Indicamos el componente raíz sobre el cual se construye toda nuestra app.
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from "./contactos.service";
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';

@NgModule({
  // Indicamos todos los componentes, pipes y directivas de mi app.
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioAltaComponent,
    MisContactosComponent,
    NuevoContactoComponent
  ],
  // Indicamos los módulos de los cuáles dependemos.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
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

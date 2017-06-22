import { Component, OnInit } from '@angular/core';
import { ContactosService } from './contactos.service';
import { Contacto } from './contacto';
import { Observable } from 'rxjs/Observable';

@Component({
  // Indicamos el elemento HTML donde se instanciará este componente.
  selector: 'app-root',
  // Indicamos la ruta al template del componente.
  templateUrl: './app.component.html',
  // Indicamos las rutas de los CSS con los estilos del componente.
  styleUrls: ['./app.component.css']
})

// Hacemos que implemente OnInit (hook/event) como prueba.
export class AppComponent implements OnInit {

  // El '$' se usa por convencción detrás del nombre para indicar que es un Observable.
  // NO es necesario.
  contactos$: Observable<Contacto[]>;

  // Para hacer una inyección de dependencias necesitamos
  // hacerlo en el constructor de clase. Hay que indicar un
  // parámetro con un modificador de acceso (obligatorio).
  // Además, tenemos que anotar su tipo: el servicio a inyectar.
  constructor(private _contactosService: ContactosService) { }

  // En el hook/event 'OnInit' inicializamos los datos de componente.
  ngOnInit() {
    this.contactos$ = this._contactosService.obtenerContactos();

    /*    Si el código no fuera a html habría que hacerlo así (en lugar del pipe)
    this._contactosService
        .obtenerContactos()
        .subscribe((contactos: Contacto[]) => {
          this.contactos = contactos;
        });
      */
  }

  eliminarContacto(contacto) {
    this._contactosService.eliminarContacto(contacto);
    this.contactos$ = this._contactosService.obtenerContactos();
  }

  guardarContacto(contacto) {
    this._contactosService
        .agregarContacto(contacto)
        .subscribe(() => {
          this.contactos$ = this._contactosService.obtenerContactos();
        });
  }

}

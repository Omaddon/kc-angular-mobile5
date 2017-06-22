import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Contacto } from '../contacto';
import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

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

}

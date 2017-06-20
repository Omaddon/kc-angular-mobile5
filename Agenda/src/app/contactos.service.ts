import { Injectable } from '@angular/core';

// Un servicio es una clase decorada con 'Injectable'.
// Este decorador no necesita ningún metadato.
// Recordar añadir el servicio en la colección de providers del módulo de nuestra app.
@Injectable()
export class ContactosService {

  private _contactos: string[];

  constructor() {
    this._contactos = [
      'Tim Cook',
      'Bill Gates',
      'Elon Musk',
      'Steve Wozniak',
      'Sundar Pichai'
    ];
  }

  // Al ser privado _contactos, debemos exponerla de alguna forma
  obtenerContactos(): string[] {
    return this._contactos;
  }

  eliminarContacto(contacto) {
    let posicion = this._contactos.indexOf(contacto);
    this._contactos.splice(posicion, 1);

    // Otra forma de hacerlo:
    // this._contactos = this._contactos.filter((c) => {
    //   return c !== contacto;
    // });
  }

  agregarContacto(contacto) {
    this._contactos.push(contacto);
  }

}

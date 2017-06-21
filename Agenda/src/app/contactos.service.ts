import { Injectable } from '@angular/core';
import { Contacto } from './contacto';

// Un servicio es una clase decorada con 'Injectable'.
// Este decorador no necesita ningún metadato.
// Recordar añadir el servicio en la colección de providers del módulo de nuestra app.
@Injectable()
export class ContactosService {

  private _contactos: Contacto[];

  constructor() {
    this._contactos = [
      new Contacto('Tim Cook'),
      new Contacto('Bill Gates'),
      new Contacto('Elon Musk'),
      new Contacto('Steve Wozniak'),
      new Contacto('Sundar Pichai')
    ];
  }

  // Al ser privado _contactos, debemos exponerla de alguna forma
  obtenerContactos(): Contacto[] {
    return this._contactos;
  }

  eliminarContacto(contacto: string):void {
    // let posicion = this._contactos.indexOf(contacto);
    // this._contactos.splice(posicion, 1);

    // Otra forma de hacerlo:
    // this._contactos = this._contactos.filter((c) => {
    //   return c !== contacto;
    // });
  }

  agregarContacto(contacto: Contacto):void {
    this._contactos.push(contacto);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

import { Contacto } from './contacto';

// Un pipe es una clase decorada con @Pipe(). Es necesario que indiquemos el metadato
// 'name', ya que es el identificador del pipe que usaremos en los templates. Un pipe
// tiene que implementar siempre la interfaz 'Pipetransform', que a su vez nos obliga
// a implementar la función 'transform'.
@Pipe({
  name: 'ordenContactos'
})
export class OrdenContactosPipe implements PipeTransform {

  // Siempre vendrá dado al menos un parámetro: el dato que va a sufrir la transformación.
  // En nuestro Pipe, vamos a ordenar la lista de Contactos dada.
  transform(contactos: Contacto[]): Contacto[] {

    let ordenados: Contacto[];

    // Si la colección de contactos tiene valores...
    if (contactos) {

      // ... la ordenamos indicando una función de ordenación.
      ordenados = contactos.sort((contactoA: Contacto, contactoB: Contacto): number => {

        let resultado: number;

        if (contactoA.nombre > contactoB.nombre) {
          resultado = 1;
        } else if (contactoA.nombre < contactoB.nombre) {
          resultado = -1;
        } else {
          resultado = 0;
        }

        return resultado;

      });

    // Si la colección de contactos es nula.
    } else {
      ordenados = [];
    }

  return ordenados;

  }

}

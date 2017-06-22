import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { environment } from '../environments/environment';

// Un servicio es una clase decorada con 'Injectable'.
// Este decorador no necesita ningún metadato.
// Recordar añadir el servicio en la colección de providers del módulo de nuestra app.
@Injectable()
export class ContactosService {

  constructor(private _http: Http) { }

  obtenerContactos(): Observable<Contacto[]> {

    // El cliente HTTP trabaja con objetos 'Response'. Este objeto tiene datos relacionados
    // con la respuesta del servidor (headers, body, status...). Nunca debemos subir este
    // objeto a la capa de arriba (a la capa de componentes). Por tanto, debemos transformar
    // este objet en el que realmente nos ha pedido el componente ('Contacto[]').
    // Para hacer ésto, nos apoyamos en la función 'map', que es un operador de los objetos
    // 'Observables'. Este operador transforma un 'Observable' en otro.
    return this._http
                .get(`${environment.apiUri}/contactos`)
                .map((respuesta: Response) => {

                  return Contacto.nuevaColeccionDesdeJSON(respuesta.json());

                });

    // return this._contactos;
  }

  eliminarContacto(contacto: string):void {
    // let posicion = this._contactos.indexOf(contacto);
    // this._contactos.splice(posicion, 1);

    // Otra forma de hacerlo:
    // this._contactos = this._contactos.filter((c) => {
    //   return c !== contacto;
    // });
  }

  agregarContacto(contacto: Contacto): Observable<Contacto> {

    // En aquellas peticiones HTTP que envíen datos al servidor (POST, PUT, PATCH) debemos
    // indica los datos como segundo parámetro. En este caso estamos enviando el contacto a
    // a crear en el cuerpo de la petición 'POST'.
    return this._http
               .post(`${environment.apiUri}/contactos`, contacto)
               .map((respuesta: Response) => {
                  return Contacto.nuevoDesdeJSON(respuesta.json());
               });

    // this._contactos.push(contacto);
  }

}

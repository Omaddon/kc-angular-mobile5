import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})

export class ListaContactosComponent {

  // En esta variable nuestro padre nos dejará datos.
  @Input() datos: Contacto[];

  @Output() clickEnEliminar = new EventEmitter<Contacto>();

  // Vamos a enviar cosas al padre (mediante eventos).
  notificarEliminacion(dato) {
    this.clickEnEliminar.emit(dato);
  }

  esGatesWozniak(contacto) {
    return contacto.indexOf('Gates') > -1 || contacto.indexOf('Wozniak') > -1;
  }

  esCookMusk(contacto) {
    return contacto.indexOf('Cook') > -1 || contacto.indexOf('Musk') > -1 ? '32px' : '14px';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  // Indicamos el elemento HTML donde se instanciará este componente.
  selector: 'app-root',
  // Indicamos la ruta al template del componente.
  templateUrl: './app.component.html',
  // Indicamos las rutas de los CSS con los estilos del componente.
  styleUrls: ['./app.component.css']
})

// Hacemos que implemente OnInit (hook/event) como prueba.
export class AppComponent implements OnInit{

contactos: string[];

// En el hook/event 'OnInit' inicializamos los datos de componente.
  ngOnInit() {
    this.contactos = [
      'Tim Cook',
      'Bill Gates',
      'Elon Musk',
      'Steve Wozniak',
      'Sundar Pichai'
    ];
  }

  eliminarContacto(contacto) {
    let posicion = this.contactos.indexOf(contacto);
    this.contactos.splice(posicion,1);

    // Otra forma de hacerlo:
    // this.contactos = this.contactos.filter((c) => {
    //   return c !== contacto;
    // });
  }
}

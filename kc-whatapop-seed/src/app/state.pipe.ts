import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateFilter'
})
export class StatePipe implements PipeTransform {

  transform(productos: Product[], state?: String): Product[] {

  const resultado: Product[] = [];

  for (let i = 0; i < productos.length; i++) {
    if (state !== '-') {
      if (productos[i].state === state) {
        resultado.push(productos[i]);
      }
    } else {
      resultado.push(productos[i]);
    }
  }
    return resultado;
  }

}

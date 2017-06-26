import { element } from 'protractor';
import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PricePipe implements PipeTransform {

  transform(producto: Product[], min?: String, max?: String): Product[] {

    const resultado: Product[] = [];

    for (let i = 0; i < producto.length; i++) {
      if ((min) && (!max)) {
        if (+producto[i].price >= +min) {
          resultado.push(producto[i]);
        }
      } else if ((!min) && (max)) {
        if (+producto[i].price <= +max) {
          resultado.push(producto[i]);
        }
      } else if ((min) && (max)) {
        if ((+producto[i].price >= +min) && (+producto[i].price <= +max)) {
          resultado.push(producto[i]);
        }
      } else {
        resultado.push(producto[i]);
      }
    }
    return resultado;
  }
}

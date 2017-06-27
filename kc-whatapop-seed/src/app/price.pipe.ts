import { element } from 'protractor';
import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PricePipe implements PipeTransform {

  transform(productos: Product[], min?: String, max?: String): Product[] {

    const resultado: Product[] = [];

    for (let i = 0; i < productos.length; i++) {
      if ((min) && (!max)) {
        if (+productos[i].price >= +min) {
          resultado.push(productos[i]);
        }
      } else if ((!min) && (max)) {
        if (+productos[i].price <= +max) {
          resultado.push(productos[i]);
        }
      } else if ((min) && (max)) {
        if ((+productos[i].price >= +min) && (+productos[i].price <= +max)) {
          resultado.push(productos[i]);
        }
      } else {
        resultado.push(productos[i]);
      }
    }
    return resultado;
  }
}

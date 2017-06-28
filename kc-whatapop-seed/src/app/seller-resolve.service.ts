import { User } from './user';
import { ProductFilter } from './product-filter';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class SellerResolveService implements Resolve<Product[]> {

  constructor(private _productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {
    return this._productService.getSellerProducts(route.params['sellerId']);
  }
}

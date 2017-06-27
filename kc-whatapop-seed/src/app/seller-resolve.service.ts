import { User } from './user';
import { ProductFilter } from './product-filter';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class SellerResolveService implements Resolve<User> {

  constructor(private _productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this._productService.getSeller(+route.params['sellerId']);
  }
}

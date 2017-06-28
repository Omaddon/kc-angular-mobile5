import { Subject } from 'rxjs/Subject';
import { ProductService } from './../product.service';
import { ProductFilter } from './../product-filter';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Product } from './../product';
import { User } from './../user';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  products: Product[];
  user: User;
  filtro: ProductFilter = {};
  private _filterStream$: Subject<ProductFilter> = new Subject;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this._filterStream$
      .switchMap((filter: ProductFilter) => this._productService.getProducts(filter))
      .subscribe((products: Product[]) => this.products = products);
    this._route.data.forEach((data: { products: Product[] }) => this.products = data.products);
    this.user = this.products[0].seller;
    this.filtro.state = '-';
  }

  goBack(): void {
    window.history.back();
  }

  mostrarProducto(producto) {
    this._router.navigate(['products', producto.id]);
  }

  filterCollection(filter: ProductFilter): void {
    if (filter) {
      this.filtro = filter;
    } else {
      this.filtro.precioMin = '0';
      this.filtro.precioMax = '9999999';
      this.filtro.state = '-';
    }

    this.filtro.seller = String(this.user.id);

    this._filterStream$.next(this.filtro);
  }

}

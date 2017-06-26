import { Product } from './../product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';

import { ProductFilter } from '../product-filter';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-collection',
  templateUrl: './products-collection.component.html',
  styleUrls: ['./products-collection.component.css']
})
export class ProductsCollectionComponent implements OnDestroy, OnInit {

  products: Product[];
  filtro: ProductFilter;
  private _filterStream$: Subject<ProductFilter> = new Subject;

  constructor(
    private _productService: ProductService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this._filterStream$
      .switchMap((filter: ProductFilter) => this._productService.getProducts(filter))
      .subscribe((products: Product[]) => this.products = products);
    this.filterCollection(null);
  }

  ngOnDestroy(): void {
    this._filterStream$.unsubscribe();
  }

  filterCollection(filter: ProductFilter): void {

    if (filter) {
      this.filtro = filter;
    } else {
      const nuevoFiltro: ProductFilter = {};

      nuevoFiltro.precioMin = '0';
      nuevoFiltro.precioMax = '9999999';

      this.filtro = nuevoFiltro;

    }

    this._filterStream$.next(filter);
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
  | Green Path                                                       |
  |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
  | Maneja el evento del componente ProductComponent que indica la   |
  | selección de un producto y navega a la dirección correspondiente.|
  | Recuerda que para hacer esto necesitas inyectar como dependencia |
  | el Router de la app. La ruta a navegar es '/products', pasando   |
  | como parámetro el identificador del producto.                    |
  |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  mostrarProducto(producto) {
    this._router.navigate(['products', producto.id]);
  }

}

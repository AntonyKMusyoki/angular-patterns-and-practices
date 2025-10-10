import { Component, inject, Signal } from '@angular/core';
import { ProductDetails } from "../product-details/product-details";
import { ProductsService } from '../products.service';
import { IProduct } from '../product.model';
import { CartStore } from '../cart.service.ngrx';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
  products!: Signal<IProduct[]>;
  private productsService = inject(ProductsService);
  private cartStore = inject(CartStore);

  ngOnInit() {
    this.products = this.productsService.products;
  }

  addToCart(product: IProduct) {
    this.cartStore.addToCart(product);
  }
}

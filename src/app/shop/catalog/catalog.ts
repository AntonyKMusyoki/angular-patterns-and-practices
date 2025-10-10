import { ChangeDetectorRef, Component, inject, Signal } from '@angular/core';
import { ProductDetails } from "../product-details/product-details";
import { IProduct } from '../product.model';
import { CartService } from '../cart-service.rxjs';
import { ProductsService } from '../products.service.rxjs';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
  products: IProduct[] = [];
  private productsService = inject(ProductsService);
  private cdr = inject(ChangeDetectorRef);
  private cartService = inject(CartService);

  ngOnInit() {
    this.productsService.products.subscribe((products) => {
      this.products = products;
      this.cdr.markForCheck();
    });
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}

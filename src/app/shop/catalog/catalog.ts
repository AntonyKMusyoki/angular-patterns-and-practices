import { Component, inject, Signal } from '@angular/core';
import { ProductDetails } from "../product-details/product-details";
import { ProductsService } from '../products.service';
import { IProduct } from '../product.model';
// import { CartStore } from '../cart.service.ngrx';
import { CartService } from '../cart.service.ngrx';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
  products!: Signal<IProduct[]>;
  private productsService = inject(ProductsService);
  // cartStore -> (property) Catalog.cartStore: {
  //           cart: Signal<IProduct[]>;
  //           taxRate: Signal<number>;
  //           itemCount: Signal<number>;
  //           subtotal: Signal<number>;
  //           tax: Signal<number>;
  //           total: Signal<number>;
  //           addToCart: (product: IProduct) => void;
  //           removeFromCart: (productId: number) => void;
  //           setTaxRate: (rate: number) => void;
  //           clearStorage: () => void;
  //           readFromStorage: () => void;
  //           writeToStorage: () => void;
  //       } & StateSource<{
  //           cart: IProduct[];
  //           taxRate: number;
  //       }>
  //cartStore is using StateSource type which is specific to NgRx and
  //it means that the concept of NgRx is bleeding into consumers of
  //CartStore. It could be difficult if latet is decided to transition
  //from NgRx. Its a good idea to hide you data store behind a facade  
  // private cartStore = inject(CartStore);
  //cartService -> (property) Catalog.cartService: CartService
  //cartService is a CartService with no clues its using NgRx
  private cartService = inject(CartService);

  ngOnInit() {
    this.products = this.productsService.products;
  }

  addToCart(product: IProduct) {
    // this.cartStore.addToCart(product);
    this.cartService.addToCart(product);
  }
}

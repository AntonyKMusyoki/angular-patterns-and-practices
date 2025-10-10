import { Component, inject } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductDetails } from '../product-details/product-details';
import { CartSummary } from "../cart-summary/cart-summary";
import { CartStore } from '../cart.service.ngrx';

@Component({
  selector: 'bot-cart',
  imports: [ProductDetails, CartSummary],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  private cartStore = inject(CartStore);
  cartItems = this.cartStore.cart;

  removeFromCart(product: IProduct) {
    this.cartStore.removeFromCart(product.id);
  }
}

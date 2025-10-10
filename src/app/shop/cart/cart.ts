import { Component, inject } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductDetails } from '../product-details/product-details';
import { CartSummary } from "../cart-summary/cart-summary";
import { CartService } from '../cart.service.ngrx';

@Component({
  selector: 'bot-cart',
  imports: [ProductDetails, CartSummary],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  private cartService = inject(CartService);
  cartItems = this.cartService.cart;

  removeFromCart(product: IProduct) {
    this.cartService.removeFromCart(product.id);
  }
}

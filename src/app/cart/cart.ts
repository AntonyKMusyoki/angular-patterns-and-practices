import { Component, inject } from '@angular/core';
import { IProduct } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  standalone: false,
  selector: 'bot-cart',
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

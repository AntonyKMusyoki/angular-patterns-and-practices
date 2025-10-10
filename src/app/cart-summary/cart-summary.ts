import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  standalone: false,
  selector: 'bot-cart-summary',
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummary {
  protected cartService = inject(CartService);
}

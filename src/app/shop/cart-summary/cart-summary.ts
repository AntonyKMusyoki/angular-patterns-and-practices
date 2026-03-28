import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
// import { CartStore } from '../cart.service.ngrx';
import { CartService } from '../cart.service.ngrx';

@Component({
  selector: 'bot-cart-summary',
  imports: [CurrencyPipe],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummary {
  // protected cartStore = inject(CartStore);
  protected cartService = inject(CartService);
}

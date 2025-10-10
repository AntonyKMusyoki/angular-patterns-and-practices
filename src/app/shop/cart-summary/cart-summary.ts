import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { CartService } from '../cart-service.rxjs';

@Component({
  selector: 'bot-cart-summary',
  imports: [CurrencyPipe, AsyncPipe],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummary {
  protected cartService = inject(CartService);
}

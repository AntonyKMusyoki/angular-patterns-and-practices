import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'bot-cart-summary',
  imports: [CurrencyPipe],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummary {
  protected cartService = inject(CartService);
}

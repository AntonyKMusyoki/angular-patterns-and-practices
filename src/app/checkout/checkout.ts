import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  standalone: false,
  selector: 'bot-checkout',
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  protected cartService = inject(CartService);
}

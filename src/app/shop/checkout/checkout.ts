import { Component, inject } from '@angular/core';
import { AddressSelector } from "../../account/address-selector/address-selector";
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { CartService } from '../cart-service.rxjs';

@Component({
  selector: 'bot-checkout',
  imports: [AddressSelector, CurrencyPipe, AsyncPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  protected cartService = inject(CartService);

}

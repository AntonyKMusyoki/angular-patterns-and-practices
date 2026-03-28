import { Component, inject } from '@angular/core';
import { AddressSelector } from "../../account/address-selector/address-selector";
import { CurrencyPipe } from '@angular/common';
// import { CartStore } from '../cart.service.ngrx';
import { CartService } from '../cart.service.ngrx';

@Component({
  selector: 'bot-checkout',
  imports: [AddressSelector, CurrencyPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  // protected cartStore = inject(CartStore);
  protected cartService = inject(CartService);

}

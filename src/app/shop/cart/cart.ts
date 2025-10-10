import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductDetails } from '../product-details/product-details';
import { CartSummary } from "../cart-summary/cart-summary";
import { CartService } from '../cart-service.rxjs';

@Component({
  selector: 'bot-cart',
  imports: [ProductDetails, CartSummary],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  private cartService = inject(CartService);
  private cdr = inject(ChangeDetectorRef);
  protected cartItems: IProduct[] = [];

  ngOnInit() {
    this.cartService.cart.subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.cdr.markForCheck();
    });
  }

  removeFromCart(product: IProduct) {
    this.cartService.removeFromCart(product.id);
  }
}

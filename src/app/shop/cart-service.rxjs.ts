import { Injectable } from '@angular/core'
import { BehaviorSubject, combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'
import { IProduct } from './product.model'

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly cartSubj = new BehaviorSubject<IProduct[]>([]);
  readonly cart = this.cartSubj.asObservable();

  private readonly taxRateSubj = new BehaviorSubject<number>(0);
  readonly taxRate = this.taxRateSubj.asObservable();

  readonly itemCount = this.cart.pipe(map(c => c.length));
  readonly subtotal = this.cart.pipe(
    map(c => c.reduce((s, p) => s + p.price * (1 - p.discount), 0))
  );
  readonly tax = combineLatest([this.subtotal, this.taxRate]).pipe(
    map(([subtotal, rate]) => subtotal * rate)
  );
  readonly total = combineLatest([this.subtotal, this.tax]).pipe(
    map(([subtotal, tax]) => subtotal + tax)
  );

  addToCart(product: IProduct) {
    this.cartSubj.next([...this.cartSubj.value, product]);
  }

  removeFromCart(productId: number) {
    const c = this.cartSubj.value;
    const i = c.findIndex(p => p.id === productId);
    if (i >= 0) this.cartSubj.next([...c.slice(0, i), ...c.slice(i + 1)]);
  }

  setTaxRate(rate: number) {
    this.taxRateSubj.next(rate);
  }
}

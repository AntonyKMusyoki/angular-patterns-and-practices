import { computed, inject, Injectable } from '@angular/core';
import { signalStore, withComputed, patchState, withMethods, withState } from '@ngrx/signals';
import { IProduct } from './product.model';
import { withStorageSync } from '@angular-architects/ngrx-toolkit';

type CartState = {
  cart: IProduct[];
  taxRate: number;
};

const initialCartState: CartState = {
  cart: [],
  taxRate: 0,
};

// Create the Signal Store
export const CartStore = signalStore(
  { providedIn: 'root' },

  // State
  withState(initialCartState),

  // Derived state (computed)
  withComputed(({ cart, taxRate }) => {
    const itemCount = computed(() => cart().length);
    const subtotal = computed(() =>
      cart().reduce((sum: number, p: IProduct) => sum + p.price * (1 - p.discount), 0)
    );
    const tax = computed(() => subtotal() * taxRate());
    const total = computed(() => subtotal() + tax());

    return { itemCount, subtotal, tax, total };
  }),

  // Methods (mutations)
  withMethods((store) => ({
    addToCart(product: IProduct) {
      patchState(store, (state) => ({ cart: [...state.cart, product] }));
    },

    removeFromCart(productId: number) {
      patchState(store, (state) => ({ cart: state.cart.filter((p) => p.id !== productId) }));
    },

    setTaxRate(rate: number) {
      patchState(store, { taxRate: rate });
    }
  })),

  // Persistence to localStorage
  withStorageSync('cart'),
);

// Export a Facade (Optional but clean)
// @Injectable({ providedIn: 'root' })
// export class CartService {
//   private readonly _cartStore = inject(CartStore);

//   readonly cart = this._cartStore.cart;
//   readonly itemCount = this._cartStore.itemCount;
//   readonly subtotal = this._cartStore.subtotal;
//   readonly tax = this._cartStore.tax;
//   readonly total = this._cartStore.total;

//   addToCart = this._cartStore.addToCart;
//   removeFromCart = this._cartStore.removeFromCart;
// }

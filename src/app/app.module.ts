import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { App } from './app';
import { Catalog } from './catalog/catalog';
import { Cart } from './cart/cart';
import { ProductDetails } from './product-details/product-details';
import { SiteHeader } from './site-header/site-header';
import { routes } from './app.routes';
import { InMemoryProductsApi } from './api/in-memory-products.service';
import { CartSummary } from './cart-summary/cart-summary';
import { Checkout } from './checkout/checkout';

@NgModule({
  declarations: [
    App,
    Catalog,
    Cart,
    CartSummary,
    Checkout,
    ProductDetails,
    SiteHeader
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryProductsApi, { delay: 0 }))
  ],
  bootstrap: [App]
})
export class AppModule { }

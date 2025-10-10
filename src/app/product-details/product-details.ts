import { Component, input } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  standalone: false,
  selector: 'bot-product-details',
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  product = input.required<IProduct>();

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0 }
  }
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe, NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'bot-product-details',
  imports: [CurrencyPipe, NgClass, NgOptimizedImage],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  product = input.required<IProduct>();
  //Add input property for parent catalog to set image priority
  //priority  -> (property) ProductDetails.priority: InputSignal<boolean>
  priority = input(false);

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  getPriceClasses() {
    //Add long running loop for Angular DevTools Analysis
    //to demo something expensive to execute 
    // for (let i = 0; i < 9000000; i++) Math.sqrt(i);
    return { strikethrough: this.product().discount > 0 }
  }
}

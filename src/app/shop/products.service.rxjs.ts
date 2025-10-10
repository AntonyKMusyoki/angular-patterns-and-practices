import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject, of } from 'rxjs'
import { startWith, switchMap, shareReplay, catchError } from 'rxjs/operators'
import { IProduct } from './product.model'

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient)
  private refreshSubject = new Subject<void>()

  readonly products = this.refreshSubject.pipe(
    startWith(undefined),
    switchMap(() =>
      this.http.get<IProduct[]>('/api/products').pipe(
        catchError(() => of([]))
      )
    ),
    shareReplay(1),
  );

  refresh() {
    this.refreshSubject.next();
  }
}

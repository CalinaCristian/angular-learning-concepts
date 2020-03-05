import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { map, filter, takeLast, first, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-rx-playground',
  templateUrl: './rx-playground.component.html',
  styleUrls: ['./rx-playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxPlaygroundComponent implements OnInit {
  public data$: Observable<string>;
  public data: string[] = [];
  public childData: string[] = [];
  public subscription: Subscription;

  constructor() {
    this.data$ = new Observable((observer: Observer<string>) => {
      let counter = 0;

      (async () => {
        while (counter < 10) {
          await new Promise(res => {
            setTimeout(() => {
              observer.next(new Date().toISOString());
              counter++;
              res();
            }, 1000);
          })
        }
        observer.next('Completed');
        observer.complete();
        observer.next('not emmited');
      })();
    });
  }

  ngOnInit(): void {
    this.subscription = this.data$
    .pipe(
      startWith('here we go again')
    )
    .subscribe(v => {
      this.data.push(v);
    });

    const childSubscription: Subscription = this.data$.subscribe(v => this.childData.push(v));
    this.subscription.add(childSubscription);

    setTimeout(() => this.subscription.unsubscribe(), 2010);
  }
}

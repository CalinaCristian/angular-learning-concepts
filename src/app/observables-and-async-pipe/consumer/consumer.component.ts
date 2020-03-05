import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, switchMap, tap, map } from 'rxjs/operators';
import { DataSourceService } from '../data-source.service';
import { FormControl } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumerComponent implements OnInit, OnDestroy {
  public searchField: FormControl;
  public loading = false;
  public data$: BehaviorSubject<any> = new BehaviorSubject(null);
  public loadingOptions: AnimationOptions = {
    path: '/assets/lottie/loading-animation.json'
  };

  private pages = 1;
  private currentPage = 1;
  private canLoadMore = false;

  private mapResource(result: any) {
    if (!result.Error && +result.totalResults > result.Search.length) {
      this.pages = Math.ceil(result.totalResults / result.Search.length);
    }

    return result.Search;
  }

  constructor(private dataSource: DataSourceService, private changeDetector: ChangeDetectorRef) {
    this.mapResource = this.mapResource.bind(this);
  }

  ngOnInit(): void {
    this.searchField = new FormControl();

    this.searchField.valueChanges
    .pipe(
      debounceTime(500),
      filter(e => e.length > 2),
      distinctUntilChanged(),
      tap(() => {
        this.currentPage = 1;
        this.pages = 1;
        this.canLoadMore = false;
        this.loading = true;
      }),
      switchMap((res: string) => this.dataSource.getData(res, this.currentPage)),
      map(this.mapResource),
    )
    .subscribe(values => {
      if (this.pages > this.currentPage) {
        this.canLoadMore = true;
      }
      this.loading = false;
      this.data$.next(values);
    });
  }

  ngOnDestroy(): void {
  }

  public getImdbLink(id: string) {
    return `https://www.imdb.com/title/${id}/`;
  }

  public loadMore() {
    this.currentPage += 1;

    if (this.currentPage === this.pages) {
      this.canLoadMore = false;
    }

    if (this.canLoadMore) {
      this.loading = true;

      this.dataSource.getData(this.searchField.value, this.currentPage).pipe(
        map(this.mapResource)
      ).subscribe(values => {
        this.loading = false;
        this.data$.next([...this.data$.value, ...values]);
      });
    }
  }
}

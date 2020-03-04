import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  public loadingOptions: AnimationOptions = {
    path: '/assets/lottie/loading-animation.json'
  };
  public canLoadMore = false;
  public data: any;

  private data$: Observable<any>;
  private pages = 1;
  private currentPage = 1;
  private inputSubscriber: Subscription;
  private loadMoreSubscriber: Subscription;

  constructor(private dataSource: DataSourceService, private changeDetector: ChangeDetectorRef) {
    this.mapResource = this.mapResource.bind(this);
  }

  ngOnInit(): void {
    this.searchField = new FormControl();

    this.data$ = this.searchField.valueChanges.pipe(
      debounceTime(500),
      filter(e => e.length > 2),
      distinctUntilChanged(),
      tap(() => {
        this.currentPage = 1;
        this.pages = 1;
        this.canLoadMore = false;
        this.loading = true;
        this.data = null;
        if (this.loadMoreSubscriber) {
          this.loadMoreSubscriber.unsubscribe();
        }
        this.changeDetector.detectChanges();
      }),
      switchMap((res: string) => this.dataSource.getData(res, this.currentPage)),
      map(this.mapResource),
      tap(() => {
        if (this.pages > this.currentPage) {
          this.canLoadMore = true;
        }
        this.loading = false;
        this.changeDetector.detectChanges();
      }),
    );

    this.inputSubscriber = this.data$.subscribe(data => {
      this.data = data;
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.inputSubscriber.unsubscribe();
  }

  private mapResource(result: any) {
    if (!result.Error && +result.totalResults > result.Search.length) {
      this.pages = Math.ceil(result.totalResults / result.Search.length);
    }

    return result.Search;
  }

  getImdbLink(id: string) {
    return `https://www.imdb.com/title/${id}/`;
  }

  loadMore() {
    this.currentPage += 1;

    if (this.currentPage === this.pages) {
      this.canLoadMore = false;
    }

    this.loading = true;

    if (this.loadMoreSubscriber) {
      this.loadMoreSubscriber.unsubscribe();
    }

    this.loadMoreSubscriber = this.dataSource.getData(this.searchField.value, this.currentPage).pipe(
      map(this.mapResource),
      tap(() => {
        this.loading = false;
      })
    ).subscribe(values => {
      this.data.push(...values);
      this.changeDetector.detectChanges();
    });
  }
}

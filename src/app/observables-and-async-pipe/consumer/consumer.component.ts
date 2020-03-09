import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject, Observable, merge } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, switchMap, tap, map, scan } from 'rxjs/operators';
import { DataSourceService } from '../data-source.service';
import { FormControl } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

interface IData {
  from: 'input' | 'load';
  data: any;
}

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumerComponent implements OnInit {
  public searchField: FormControl;
  public loading = false;
  public loadingOptions: AnimationOptions = {
    path: '/assets/lottie/loading-animation.json'
  };
  public data$: Observable<any>;

  private pages = 1;
  private currentPage = 1;
  private canLoadMore = false;
  private loadingObs$ = new Subject();

  constructor(private dataSource: DataSourceService) {
    this.mapResource = this.mapResource.bind(this);
  }

  private mapResource(result: any, from: 'input' | 'load'): IData {
    if (!result.Error && +result.totalResults > result.Search.length) {
      this.pages = Math.ceil(result.totalResults / result.Search.length);
    }

    return { data: result.Search, from };
  }

  ngOnInit(): void {
    this.searchField = new FormControl();

    const obsInput = this.searchField.valueChanges
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
      map(v => this.mapResource(v, 'input')),
      tap(() => {
        if (this.pages > this.currentPage) {
          this.canLoadMore = true;
        }
        this.loading = false;
      })
    );

    const obsLoading = this.loadingObs$.pipe(
      switchMap(() => this.dataSource.getData(this.searchField.value, this.currentPage)),
      map(v => this.mapResource(v, 'load')),
      tap(() => this.loading = false)
    );

    this.data$ = merge(obsInput, obsLoading).pipe(
      scan((acc: IData | null, cur: IData) => {
        if (cur.from === 'load') {
          acc.data.push(...cur.data);
        } else {
          acc = cur;
        }
        return acc;
      }, null)
    );
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
      this.loadingObs$.next();
    }
  }
}

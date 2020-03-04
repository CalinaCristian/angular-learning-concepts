import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  private _API_KEY = '&apikey=8c76035a';
  private _BASE_URL = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  getData(searchStr: string, page: number): Observable<any> {
    const url = `${this._BASE_URL}?s=${searchStr}&page=${page}${this._API_KEY}`;

    return this.http.get(url);
  }
}

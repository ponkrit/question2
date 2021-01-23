import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class CategoryService {
  private _url = 'https://api.publicapis.org/categories';
  constructor(private http: HttpClient) { }

  public getCategoryList(): Observable<any> {
    return this.http.get(this._url);
  }
}

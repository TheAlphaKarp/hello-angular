import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public constructor(private http: HttpClient) { }

  public getBeer(): Observable<object> {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosTitleResolver implements Resolve<any> {
  url = environment.API_URL
  key = environment.API_KEY
  perPage = environment.PER_PAGE

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const title = route.paramMap.get('title')
    
    return this.http.get(`${this.url}search/photos/?query=${title}&per_page=${this.perPage}${this.key}`)
      .pipe(
        catchError((e) => throwError(e))
      )
  }
}

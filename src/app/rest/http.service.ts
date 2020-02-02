import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  endpoints = {
    users: 'https://jsonplaceholder.typicode.com/users',
    posts: 'https://jsonplaceholder.typicode.com/posts?userId='
  };

  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}

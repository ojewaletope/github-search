import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CoreModule} from "../core.module";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  searchGithub(query: string): Observable<any> {
    return this.http.get(`https://api.github.com/search/users?q=${query}`).pipe(tap(), map(res => {
      return res;
    }))
  }
}

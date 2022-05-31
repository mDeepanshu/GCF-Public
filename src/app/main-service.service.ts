import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from './models/responseType';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  constructor(private http: HttpClient) {}
  public url: string = 'http://localhost:3000';

  fetchTransactions(username) {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/public/fetchTransactions?username=${username}`)
        .subscribe((responseData: ResponseType) => {
          response(responseData.message);
        });
    });
  }
  fetchblock(direction) {
    return new Promise((response, reject) => {
      this.http
        .get(`${this.url}/public/fetchBlock?direction=${direction}`)
        .subscribe((responseData: ResponseType) => {
          response(responseData.message);
        });
    });
  }
}

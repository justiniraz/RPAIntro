import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {
  apiUrl = 'http://localhost:3000';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getData() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/data').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  saveData(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/data', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
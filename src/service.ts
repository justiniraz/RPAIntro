import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable()
export class JSONDataService {

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get('http://localhost:3000/data');
    }
}
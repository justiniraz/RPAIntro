
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TestData} from './models/testdata';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'http://localhost:3000/data';

  dataChange: BehaviorSubject<TestData[]> = new BehaviorSubject<TestData[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): TestData[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllData(): void {
    this.httpClient.get<TestData[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }
}
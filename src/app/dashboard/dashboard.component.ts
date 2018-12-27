import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../service';
import { HttpClient } from '@angular/common/http';
import {MatPaginator, MatTableDataSource, MatDialog, MatSort} from '@angular/material';
import {TestData} from '../_models/testdata';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  exampleDatabase: DataService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;


  
  restData: any;
  displayedColumns = ['item_number', 'color', 'date', 'description'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;
  



  constructor(private httpClient: HttpClient,
    public dataService: DataService) {
    
  }

  ngOnInit() {

    //this.dataSource.paginator = this.paginator;
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  public loadData() {
    this.exampleDatabase = new DataService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}


export interface restData {
  item_number: number;
  color: string;
  date: Date;
  description: string;
}



  export class ExampleDataSource extends DataSource<TestData> {
    _filterChange = new BehaviorSubject('');
  
    get filter(): string {
      return this._filterChange.value;
    }
  
    set filter(filter: string) {
      this._filterChange.next(filter);
    }
  
    filteredData: TestData[] = [];
    renderedData: TestData[] = [];
  
    constructor(public _exampleDatabase: DataService,
                public _paginator: MatPaginator,
                public _sort: MatSort) {
      super();
      // Reset to the first page when the user changes the filter.
      this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<TestData[]> {
      // Listen for any changes in the base data, sorting, filtering, or pagination
      const displayDataChanges = [
        this._exampleDatabase.dataChange,
        this._sort.sortChange,
        this._filterChange,
        this._paginator.page
      ];
  
      this._exampleDatabase.getAllData();
  
  
      return merge(...displayDataChanges).pipe(map( () => {
          // Filter data
          this.filteredData = this._exampleDatabase.data.slice().filter((testdata: TestData) => {
            const searchStr = (testdata.item_number + testdata.color + testdata.date + testdata.description).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
  
          // Sort filtered data
          const sortedData = this.sortData(this.filteredData.slice());
  
          // Grab the page's slice of the filtered sorted data.
          const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
          this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
          return this.renderedData;
        }
      ));
    }
  
    disconnect() {}
  
  
    /** Returns a sorted copy of the database data. */
    sortData(data: TestData[]): TestData[] {
      if (!this._sort.active || this._sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        let propertyA: number | string = '';
        let propertyB: number | string = '';
  
        switch (this._sort.active) {
          case 'item_number': [propertyA, propertyB] = [a.item_number, b.item_number]; break;
          case 'color': [propertyA, propertyB] = [a.color, b.color]; break;
          case 'date': [propertyA, propertyB] = [Number(new Date (a.date).valueOf()), Number(new Date(b.date).valueOf())]; break;
          case 'description': [propertyA, propertyB] = [a.description, b.description]; break;
        }
  
        const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
  
        return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RestProvider } from '../../service';
import { HttpClient } from '@angular/common/http';
import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  restData: any;

  elements: any = [];
  previous: any = [];
  firstItemIndex;
  lastItemIndex;
  displayedColumns = ['Item Number', 'Color', 'Date', 'Description'];
  



  constructor(private restProvider: RestProvider, private httpclient: HttpClient, private tableService: MdbTableService,
    private cdRef: ChangeDetectorRef) {
    this.getData();
    
  }

  getData() {
    this.restProvider.getData()
      .then(data => {
        this.restData = data;
        console.log(this.restData);
      });
  }

  ngOnInit() {
    for (let i = 1; i <= 20; i++) {
      this.elements.push({ itemnumber: 'item number', color: 'color ' + i, date: 'date ' + i, description: 'description ' + i });
    }

    this.tableService.setDataSource(this.elements);
    this.elements = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }


  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }
}


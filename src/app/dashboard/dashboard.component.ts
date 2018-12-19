import { Component, OnInit, ViewChild } from '@angular/core';
import { JSONDataService } from '../../service';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  show = true;
  displayedColumns: string[] = ['item_number', 'color', 'date', 'description'];
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private jsonDataService: JSONDataService) {
    this.data = jsonDataService.getData();
    this.dataSource.paginator = this.paginator;
    this.getData();
  }

  getData() {
    this.jsonDataService.getData().subscribe(
      data => { this.data = data },
      err => console.error(err),
      () => console.log('done loading data')
    );
  }

  ngOnInit() { }

  showData() {
    if (this.show) {
      this.show = false;
      return;
    }
    this.getData();
    this.show = true;

  }


}

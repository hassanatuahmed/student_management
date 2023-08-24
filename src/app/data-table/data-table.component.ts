import { DataSource } from '@angular/cdk/collections';
import { StudentsService } from 'src/app/students.service';
import { AfterViewInit, Component, ViewChild, OnInit,ChangeDetectorRef } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  dataSource: DataTableDataSource = new DataTableDataSource(this.srv)

  @ViewChild(MatPaginator) paginator!: MatPaginator;




  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  // dataSource = new DataTableDataSource();

  constructor(private srv: StudentsService) {}


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','email', 'action'];

  ngAfterViewInit(): void {
    // this.dataSource = new DataTableDataSource(this.srv);
    this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteStudent(id:number){
    this.srv.deleteStudent(id).subscribe((result) =>{
      console.log(result);
      // this.ngOnInit();

    });

  }
}

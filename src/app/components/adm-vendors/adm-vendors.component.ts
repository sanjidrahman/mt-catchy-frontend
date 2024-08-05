import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-vendors',
  templateUrl: './adm-vendors.component.html',
  styleUrls: ['./adm-vendors.component.css']
})
export class AdmVendorsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['position', 'name', 'email', 'approve', 'action'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  subscribe = new Subscription()

  constructor(
    private _service: AppService,
    private _router: Router,
  ){}

  ngOnInit(): void {
    this.subscribe.add(
      this._service.getVendors().subscribe({
        next: (res: any) => {
          this.dataSource.data = res
        },
        error: (err) => {
          console.log(err);
        }
      })
    )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  vdrView(id: string) {
    localStorage.setItem('vendorId', id);
    this._router.navigate(['/admin/nav/vendor-view'])
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

}

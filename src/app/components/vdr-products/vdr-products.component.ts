import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-vdr-products',
  templateUrl: './vdr-products.component.html',
  styleUrls: ['./vdr-products.component.css']
})
export class VdrProductsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['image', 'title', 'price', 'quantity', 'action'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  subscribe = new Subscription()
  products: any

  constructor(
    private _service: AppService,
  ) { }

  ngOnInit(): void {
    this.subscribe.add(
      this._service.getProduct().subscribe({
        next: (res: any) => {
          this.dataSource.data = res
        },
        error: (err) => {
          console.log(err);
        }
      })
    )
  }

  getProductImage(file: string) {
    return `https://catchy-jzml.onrender.com/file/${file}`
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

}

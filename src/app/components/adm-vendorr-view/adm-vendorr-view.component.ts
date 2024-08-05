import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adm-vendorr-view',
  templateUrl: './adm-vendorr-view.component.html',
  styleUrls: ['./adm-vendorr-view.component.css']
})
export class AdmVendorrViewComponent implements OnInit, OnDestroy {

  subscribe = new Subscription()
  vendorId: any
  vendorDetails: any

  constructor(
    private _service: AppService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.vendorId = localStorage.getItem('vendorId')
    this.subscribe.add(
      this._service.vendorDetails(this.vendorId).subscribe({
        next: (res) => {
          this.vendorDetails = res
        },
        error: (err) => {
          this._snackBar.open(`${err.error.message}`, 'close', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          })
        }
      })
    )
  }

  approveVendor() {
    this.subscribe.add(
      this._service.approveVendor(this.vendorId).subscribe({
        next: (res: any) => {
          this._router.navigate(['/admin/nav/vendor'])
          this._snackBar.open(`${res.message}`, 'close', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          })
        },
        error: (err) => {
          this._snackBar.open(`${err.error.message}`, 'close', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          })
        }
      })
    )
  }

  rejectVendor() {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

}

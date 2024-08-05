import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adm-login',
  templateUrl: './adm-login.component.html',
  styleUrls: ['./adm-login.component.css']
})
export class AdmLoginComponent implements OnInit, OnDestroy {

  admForm!: FormGroup
  subscribe = new Subscription()

  constructor(
    private _fb: FormBuilder,
    private _service: AppService,
    private _router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.admForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    const data = this.admForm.value
    this.subscribe.add(
      this._service.adminSignin(data).subscribe({
        next: () => {
          this._router.navigate(['/admin/nav/dash'])
          this._snackBar.open(`Loggedin Successfully..!`, 'close', {
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

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vdr-signup',
  templateUrl: './vdr-signup.component.html',
  styleUrls: ['./vdr-signup.component.css']
})
export class VdrSignupComponent implements OnInit, OnDestroy {

  regForm!: FormGroup
  subscribe = new Subscription()

  constructor(
    private _fb: FormBuilder,
    private _service: AppService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.regForm = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.regForm.invalid) {
      return
    } else {
      const regData = this.regForm.value
      this.subscribe.add(
        this._service.signup(regData).subscribe({
          next: (res: any) => {
            this._snackBar.open(`${res.message}`, 'close', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            })
            console.log('Registration Success..!');
            this._router.navigate(['/vendor']); // vendor dash add
          },
          error: (err) => {
            this._snackBar.open(`${err.error.message}`, 'close', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            })
            console.log(err);
          }
        })
      )
    }
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}

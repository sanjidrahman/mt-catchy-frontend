import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vdr-login',
  templateUrl: './vdr-login.component.html',
  styleUrls: ['./vdr-login.component.css']
})
export class VdrLoginComponent implements OnInit, OnDestroy {

  logForm!: FormGroup
  subscribe = new Subscription()

  constructor(
    private _fb: FormBuilder,
    private _service: AppService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.logForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    if(this.logForm.invalid) {
      return
    } else {
      const logForm = this.logForm.value
      this.subscribe.add(
        this._service.signin(logForm).subscribe({
          next: () => {
            this._snackBar.open(`Login Successfull`, 'close', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            })
            console.log('Login Success..!');
            this._router.navigate(['/vendor/nav/dash']); // vendor dash add
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

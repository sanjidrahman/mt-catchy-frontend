import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from '../../services/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vdr-add-product',
  templateUrl: './vdr-add-product.component.html',
  styleUrls: ['./vdr-add-product.component.css']
})
export class VdrAddProductComponent implements OnInit, OnDestroy {

  addProForm!: FormGroup;
  subscribe = new Subscription()
  fileSelected!: File

  constructor(
    private _fb: FormBuilder,
    private _service: AppService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.addProForm = this._fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  onFileChange(event: any) {
    this.fileSelected = event.target.files[0]
  }

  onSubmit() {
    if (this.addProForm.invalid) {
      return
    } else {
      const form = new FormData()
      form.append('title', this.addProForm.get('title')?.value)
      form.append('description', this.addProForm.get('description')?.value)
      form.append('price', this.addProForm.get('price')?.value)
      form.append('quantity', this.addProForm.get('quantity')?.value)
      form.append('file', this.fileSelected, this.fileSelected.name)
      this.subscribe.add(
        this._service.addProduct(form).subscribe({
          next: () => {
            console.log('succces');
          },
          error: (err) => {
            console.log(err);
          }
        })
      )
    }
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

}

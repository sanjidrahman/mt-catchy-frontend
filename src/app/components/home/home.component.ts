import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: any
  subscribe = new Subscription()

  constructor(
    private _service: AppService
  ) { }

  ngOnInit(): void {
    this.subscribe.add(
      this._service.getProduct().subscribe({
        next: (res) => {
          this.products = res
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

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

}

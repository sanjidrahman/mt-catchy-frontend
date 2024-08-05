import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(
    private _http: HttpClient
  ) { }

  commonUrl = 'http://localhost:3000'

  signin(data: any) {
    console.log(data);
    
    return this._http.post(`${ this.commonUrl}/signin`, data)
  }

  signup(data: any) {
    return this._http.post(`${ this.commonUrl}/signup`, data)
  }

  getVendors() {
    return this._http.get(`${this.commonUrl}/admin/vendor`)
  }
  
  adminSignin(data: any) {
    return this._http.post(`${this.commonUrl}/admin/signin`, data)
  }

  vendorDetails(id: string) {
    return this._http.get(`${this.commonUrl}/admin/vendor/${id}`)
  }

  approveVendor(id: string) {
    return this._http.patch(`${this.commonUrl}/admin/vendor/${id}`, id)
  }

  addProduct(data: any) {
    return this._http.post(`${this.commonUrl}/product`, data)
  }

  getProduct() {
    return this._http.get(`${this.commonUrl}/product`)
  }

  getImage(file: string) {
    return this._http.get(`${this.commonUrl}/file/${file}`)
  }
}

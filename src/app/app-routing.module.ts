import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdmLoginComponent } from './components/adm-login/adm-login.component';
import { AdmDashComponent } from './components/adm-dash/adm-dash.component';
import { VdrLoginComponent } from './components/vdr-login/vdr-login.component';
import { VdrSignupComponent } from './components/vdr-signup/vdr-signup.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { VdrDashComponent } from './components/vdr-dash/vdr-dash.component';
import { VdrProductsComponent } from './components/vdr-products/vdr-products.component';
import { AdmVendorsComponent } from './components/adm-vendors/adm-vendors.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdmVendorrViewComponent } from './components/adm-vendorr-view/adm-vendorr-view.component';
import { VdrAddProductComponent } from './components/vdr-add-product/vdr-add-product.component';

const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'admin', title: 'Admin Login', component: AdmLoginComponent },
  { path: 'admin-dashboard', title: 'Admin Dashboard', component: AdmDashComponent },
  { path: 'vendor', title: 'Vendor Login', component: VdrLoginComponent },
  { path: 'vendor-signup', title: 'Vendor Signup', component: VdrSignupComponent },
  {
    path: 'admin/nav', component: AdminComponent, children:
      [
        { path: 'dash', title: 'Admin Dashboard', component: AdmDashComponent },
        { path: 'vendor', title: 'Admin Vendors', component: AdmVendorsComponent },
        { path: 'vendor-view', title: 'Admin Vendors View', component: AdmVendorrViewComponent },
      ]
  },
  {
    path: 'vendor/nav', component: VendorComponent, children:
      [
        { path: 'dash', title: 'Vendor Dashboard', component: VdrDashComponent },
        { path: 'product', title: 'Vendors Products', component: VdrProductsComponent },
        { path: 'add-product', title: 'Vendors Add Product', component: VdrAddProductComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

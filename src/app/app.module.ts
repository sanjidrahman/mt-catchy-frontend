import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdmLoginComponent } from './components/adm-login/adm-login.component';
import { VdrLoginComponent } from './components/vdr-login/vdr-login.component';
import { VdrSignupComponent } from './components/vdr-signup/vdr-signup.component';
import { AdmDashComponent } from './components/adm-dash/adm-dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { VendorComponent } from './components/vendor/vendor.component';
import { VdrDashComponent } from './components/vdr-dash/vdr-dash.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { VdrProductsComponent } from './components/vdr-products/vdr-products.component';
import { AdmVendorsComponent } from './components/adm-vendors/adm-vendors.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AdmVendorrViewComponent } from './components/adm-vendorr-view/adm-vendorr-view.component';
import { VdrAddProductComponent } from './components/vdr-add-product/vdr-add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmLoginComponent,
    VdrLoginComponent,
    VdrSignupComponent,
    AdmDashComponent,
    VendorComponent,
    VdrDashComponent,
    AdminComponent,
    VdrProductsComponent,
    AdmVendorsComponent,
    AdmVendorrViewComponent,
    VdrAddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

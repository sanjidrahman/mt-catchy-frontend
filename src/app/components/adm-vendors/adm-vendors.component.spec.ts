import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmVendorsComponent } from './adm-vendors.component';

describe('AdmVendorsComponent', () => {
  let component: AdmVendorsComponent;
  let fixture: ComponentFixture<AdmVendorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmVendorsComponent]
    });
    fixture = TestBed.createComponent(AdmVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

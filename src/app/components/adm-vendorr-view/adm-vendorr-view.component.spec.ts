import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmVendorrViewComponent } from './adm-vendorr-view.component';

describe('AdmVendorrViewComponent', () => {
  let component: AdmVendorrViewComponent;
  let fixture: ComponentFixture<AdmVendorrViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmVendorrViewComponent]
    });
    fixture = TestBed.createComponent(AdmVendorrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

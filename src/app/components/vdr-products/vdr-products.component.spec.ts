import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdrProductsComponent } from './vdr-products.component';

describe('VdrProductsComponent', () => {
  let component: VdrProductsComponent;
  let fixture: ComponentFixture<VdrProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VdrProductsComponent]
    });
    fixture = TestBed.createComponent(VdrProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

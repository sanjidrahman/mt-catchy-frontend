import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdrAddProductComponent } from './vdr-add-product.component';

describe('VdrAddProductComponent', () => {
  let component: VdrAddProductComponent;
  let fixture: ComponentFixture<VdrAddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VdrAddProductComponent]
    });
    fixture = TestBed.createComponent(VdrAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

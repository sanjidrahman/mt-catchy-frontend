import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdrLoginComponent } from './vdr-login.component';

describe('VdrLoginComponent', () => {
  let component: VdrLoginComponent;
  let fixture: ComponentFixture<VdrLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VdrLoginComponent]
    });
    fixture = TestBed.createComponent(VdrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

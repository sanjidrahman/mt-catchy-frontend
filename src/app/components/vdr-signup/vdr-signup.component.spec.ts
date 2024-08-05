import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdrSignupComponent } from './vdr-signup.component';

describe('VdrSignupComponent', () => {
  let component: VdrSignupComponent;
  let fixture: ComponentFixture<VdrSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VdrSignupComponent]
    });
    fixture = TestBed.createComponent(VdrSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

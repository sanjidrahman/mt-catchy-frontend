import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdrDashComponent } from './vdr-dash.component';

describe('VdrDashComponent', () => {
  let component: VdrDashComponent;
  let fixture: ComponentFixture<VdrDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VdrDashComponent]
    });
    fixture = TestBed.createComponent(VdrDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

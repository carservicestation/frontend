import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCheckoutComponent } from './appointment-checkout.component';

describe('AppointmentCheckoutComponent', () => {
  let component: AppointmentCheckoutComponent;
  let fixture: ComponentFixture<AppointmentCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

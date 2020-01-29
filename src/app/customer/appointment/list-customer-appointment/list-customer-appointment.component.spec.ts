import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerAppointmentComponent } from './list-customer-appointment.component';

describe('ListCustomerAppointmentComponent', () => {
  let component: ListCustomerAppointmentComponent;
  let fixture: ComponentFixture<ListCustomerAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustomerAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

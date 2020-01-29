import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceCenterAppointmentComponent } from './list-service-center-appointment.component';

describe('ListServiceCenterAppointmentComponent', () => {
  let component: ListServiceCenterAppointmentComponent;
  let fixture: ComponentFixture<ListServiceCenterAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceCenterAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceCenterAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

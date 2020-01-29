import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicesToServicenterComponent } from './add-services-to-servicenter.component';

describe('AddServicesToServicenterComponent', () => {
  let component: AddServicesToServicenterComponent;
  let fixture: ComponentFixture<AddServicesToServicenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicesToServicenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicesToServicenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

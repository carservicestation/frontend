import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceCenterComponent } from './add-service-center.component';

describe('AddServiceCenterComponent', () => {
  let component: AddServiceCenterComponent;
  let fixture: ComponentFixture<AddServiceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

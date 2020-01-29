import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCenterAddressComponent } from './add-center-address.component';

describe('AddCenterAddressComponent', () => {
  let component: AddCenterAddressComponent;
  let fixture: ComponentFixture<AddCenterAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCenterAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCenterAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

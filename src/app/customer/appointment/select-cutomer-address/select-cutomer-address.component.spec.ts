import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCutomerAddressComponent } from './select-cutomer-address.component';

describe('SelectCutomerAddressComponent', () => {
  let component: SelectCutomerAddressComponent;
  let fixture: ComponentFixture<SelectCutomerAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCutomerAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCutomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCenterComponent } from './select-center.component';

describe('SelectCenterComponent', () => {
  let component: SelectCenterComponent;
  let fixture: ComponentFixture<SelectCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerConsoleComponent } from './customer-console.component';

describe('CustomerConsoleComponent', () => {
  let component: CustomerConsoleComponent;
  let fixture: ComponentFixture<CustomerConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

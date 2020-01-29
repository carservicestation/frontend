import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerConsoleComponent } from './owner-console.component';

describe('OwnerConsoleComponent', () => {
  let component: OwnerConsoleComponent;
  let fixture: ComponentFixture<OwnerConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

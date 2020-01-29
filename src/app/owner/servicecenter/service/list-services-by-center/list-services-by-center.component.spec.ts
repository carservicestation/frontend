import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServicesByCenterComponent } from './list-services-by-center.component';

describe('ListServicesByCenterComponent', () => {
  let component: ListServicesByCenterComponent;
  let fixture: ComponentFixture<ListServicesByCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServicesByCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServicesByCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

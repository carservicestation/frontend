import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceCentersComponent } from './list-service-centers.component';

describe('ListServiceCentersComponent', () => {
  let component: ListServiceCentersComponent;
  let fixture: ComponentFixture<ListServiceCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

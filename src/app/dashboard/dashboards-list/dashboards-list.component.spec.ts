import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsListComponent } from './dashboards-list.component';

describe('DashboardsListComponent', () => {
  let component: DashboardsListComponent;
  let fixture: ComponentFixture<DashboardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

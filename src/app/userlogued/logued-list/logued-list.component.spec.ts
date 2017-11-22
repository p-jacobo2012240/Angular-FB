import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoguedListComponent } from './logued-list.component';

describe('LoguedListComponent', () => {
  let component: LoguedListComponent;
  let fixture: ComponentFixture<LoguedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoguedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoguedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

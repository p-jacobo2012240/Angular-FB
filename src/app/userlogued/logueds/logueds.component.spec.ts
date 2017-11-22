import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoguedsComponent } from './logueds.component';

describe('LoguedsComponent', () => {
  let component: LoguedsComponent;
  let fixture: ComponentFixture<LoguedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoguedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoguedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloguedComponent } from './userlogued.component';

describe('UserloguedComponent', () => {
  let component: UserloguedComponent;
  let fixture: ComponentFixture<UserloguedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserloguedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloguedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

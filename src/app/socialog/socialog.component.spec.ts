import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialogComponent } from './socialog.component';

describe('SocialogComponent', () => {
  let component: SocialogComponent;
  let fixture: ComponentFixture<SocialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

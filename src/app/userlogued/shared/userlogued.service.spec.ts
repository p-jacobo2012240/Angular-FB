import { TestBed, inject } from '@angular/core/testing';

import { UserloguedService } from './userlogued.service';

describe('UserloguedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserloguedService]
    });
  });

  it('should be created', inject([UserloguedService], (service: UserloguedService) => {
    expect(service).toBeTruthy();
  }));
});

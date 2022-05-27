import { TestBed } from '@angular/core/testing';

import { AuthDataService } from './auth-data.service';

describe('AuthDataService', () => {
  let service: AuthDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

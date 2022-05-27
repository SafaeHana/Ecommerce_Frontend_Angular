import { TestBed } from '@angular/core/testing';

import { PayementService } from './payement.service';

describe('PayementService', () => {
  let service: PayementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

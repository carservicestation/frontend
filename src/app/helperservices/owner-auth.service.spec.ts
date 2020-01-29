import { TestBed } from '@angular/core/testing';

import { OwnerAuthService } from './owner-auth.service';

describe('OwnerAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnerAuthService = TestBed.get(OwnerAuthService);
    expect(service).toBeTruthy();
  });
});

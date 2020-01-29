import { TestBed } from '@angular/core/testing';

import { AuthdataService } from './authdata.service';

describe('AuthdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthdataService = TestBed.get(AuthdataService);
    expect(service).toBeTruthy();
  });
});

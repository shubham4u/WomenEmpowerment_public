import { TestBed } from '@angular/core/testing';

import { NgoserviceService } from './ngoservice.service';

describe('NgoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgoserviceService = TestBed.get(NgoserviceService);
    expect(service).toBeTruthy();
  });
});

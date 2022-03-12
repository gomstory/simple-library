import { TestBed } from '@angular/core/testing';

import { SimpleCoreService } from './simple-core.service';

describe('SimpleCoreService', () => {
  let service: SimpleCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

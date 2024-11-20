import { TestBed } from '@angular/core/testing';

import { DemoUserServiceService } from './demo-user-service.service';

describe('DemoUserServiceService', () => {
  let service: DemoUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

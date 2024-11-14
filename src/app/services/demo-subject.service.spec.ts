import { TestBed } from '@angular/core/testing';

import { DemoSubjectService } from './demo-subject.service';

describe('DemoSubjectService', () => {
  let service: DemoSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

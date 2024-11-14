import { TestBed } from '@angular/core/testing';

import { DemoBehaviourService } from './demo-behaviour.service';

describe('DemoBehaviourService', () => {
  let service: DemoBehaviourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoBehaviourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ProposalNavigateService } from './proposal-navigate.service';

describe('ProposalNavigateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProposalNavigateService = TestBed.get(ProposalNavigateService);
    expect(service).toBeTruthy();
  });
});

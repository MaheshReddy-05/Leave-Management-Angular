import { TestBed } from '@angular/core/testing';

import { StatusTagService } from './status-tag.service';

describe('StatusTagService', () => {
  let service: StatusTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

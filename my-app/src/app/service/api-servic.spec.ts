import { TestBed } from '@angular/core/testing';

import { ApiServic } from './api-servic';

describe('ApiServic', () => {
  let service: ApiServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

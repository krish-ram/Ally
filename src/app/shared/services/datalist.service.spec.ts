import { TestBed } from '@angular/core/testing';

import { DatalistService } from './datalist.service';

describe('DatalistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatalistService = TestBed.get(DatalistService);
    expect(service).toBeTruthy();
  });
});

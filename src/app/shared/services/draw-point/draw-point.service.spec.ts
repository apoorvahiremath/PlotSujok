import { TestBed } from '@angular/core/testing';

import { DrawPointService } from './draw-point.service';

describe('DrawPointService', () => {
  let service: DrawPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

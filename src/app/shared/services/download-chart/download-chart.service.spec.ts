import { TestBed } from '@angular/core/testing';

import { DownloadChartService } from './download-chart.service';

describe('DownloadChartService', () => {
  let service: DownloadChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FlightservService } from './flightserv.service';

describe('FlightservService', () => {
  let service: FlightservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

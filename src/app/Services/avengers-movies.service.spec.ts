import { TestBed } from '@angular/core/testing';

import { AvengersMoviesService } from './avengers-movies.service';

describe('AvengersMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvengersMoviesService = TestBed.get(AvengersMoviesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MarvelMoviesService } from './marvel-movies.service';

describe('MarvelMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelMoviesService = TestBed.get(MarvelMoviesService);
    expect(service).toBeTruthy();
  });
});

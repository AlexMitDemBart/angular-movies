import { TestBed } from '@angular/core/testing';

import { SearchedMoviesService } from './searched-movies.service';

describe('SearchedMoviesService', () => {
  let service: SearchedMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchedMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

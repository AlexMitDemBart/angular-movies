import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/MovieResponse';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

  private apiSearchMovieURL = 'https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1&include_adult=false&query=';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<MovieResponse>{
    return this.http.get<MovieResponse>(this.apiUrl);
  }

  getSearchedMovies(title: string): Observable<MovieResponse>{
    return this.http.get<MovieResponse>(
      this.apiSearchMovieURL + title);
  }
}

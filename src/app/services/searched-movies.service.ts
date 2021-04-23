import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchedMoviesService {

  private subject = new Subject<any>();
  private searchedMovieTitle = '';

  constructor() { }

  sendClickEvent(): void {
    this.subject.next();
  }

  getClickEvent(): Observable<any>{
    return this.subject.asObservable();
  }

  setSearchedMovieTitle(searchedMovieTitle: string): void {
    this.searchedMovieTitle = searchedMovieTitle;
  }

  getSearchedMovieTitle(): string{
    return this.searchedMovieTitle;
  }
}

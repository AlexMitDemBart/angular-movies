import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';
import { SearchedMoviesService } from '../../services/searched-movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movies: Movie[] = [];
  imageUrl = 'https://image.tmdb.org/t/p/w500';
  searchedMoviesTitle = '';
  clickEventSubscription: Subscription;

  constructor(private movieService: MovieService,
              private searchedMoviesService: SearchedMoviesService) {

    this.clickEventSubscription = this.searchedMoviesService.getClickEvent()
      .subscribe(() => this.getSearchedMovies());
  }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovies()
      .subscribe(movies => {
        this.movies = movies.results;
      });
  }

  getSearchedMovies(): void {
    this.searchedMoviesTitle = this.searchedMoviesService.getSearchedMovieTitle();
    this.movieService.getSearchedMovies(this.searchedMoviesTitle)
      .subscribe(movies => {
        this.movies = movies.results;
      });
  }

}

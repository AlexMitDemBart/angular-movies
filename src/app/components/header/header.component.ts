import {Component, OnInit} from '@angular/core';
import {SearchedMoviesService} from '../../services/searched-movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchedMoviesTitle = '';

  constructor(private searchedMoviesService: SearchedMoviesService) {
  }

  ngOnInit(): void {
  }

  searchMovies(): void {
    if (this.searchedMoviesTitle.length > 0) {
      this.searchedMoviesService.setSearchedMovieTitle(this.searchedMoviesTitle);
      this.searchedMoviesService.sendClickEvent();
    }
  }

  refresh(): void{
    window.location.reload();
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-movie-list',
  imports: [SearchBarComponent, AsyncPipe, NgIf, NgFor, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  private movieService = inject(MovieService);
  movies$!: Observable<Movie[]>;
  imgUrl = environment.imgUrl;

  ngOnInit() {
    this.movies$ = this.movieService.getMovieList();
  }

  onSearch(title: string) {
    this.movies$ = title.trim()
      ? this.movieService.getMovieByTitle(title)
      : this.movieService.getMovieList();
  }
}
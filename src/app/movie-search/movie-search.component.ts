import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { MovieService } from '../movie.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-movie-search',
  imports: [AsyncPipe, NgIf, NgFor, RouterLink],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  imgUrl = environment.imgUrl;

  movies$ = this.route.paramMap.pipe(
    switchMap(p => this.movieService.getMovieByTitle(p.get('title') ?? ''))
  );
}
import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from '../movie.service';
import { WishlistStoreService } from '../wishlist-store.service';
import { Movie } from '../movie';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-movie-detail',
  imports: [AsyncPipe, NgIf, DatePipe, FaIconComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  wishlist = inject(WishlistStoreService);
  faHeart = faHeart;
  imgUrl = environment.imgUrl;

  movie$ = this.route.paramMap.pipe(
    switchMap(p => this.movieService.getMovieById(Number(p.get('id'))))
  );

  toggle(m: Movie) {
    this.wishlist.toggle(m);
  }
}
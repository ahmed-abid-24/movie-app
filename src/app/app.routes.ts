import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'search/:title', component: MovieSearchComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '**', redirectTo: '' }
];
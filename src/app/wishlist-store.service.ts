import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({ providedIn: 'root' })
export class WishlistStoreService {
  private movies: Movie[] = [];

  constructor() {
    try {
      this.movies = JSON.parse(localStorage.getItem('wishlist') ?? '[]');
    } catch {
      this.movies = [];
    }
  }

  getAll(): Movie[] {
    return this.movies;
  }

  has(id: number): boolean {
    return this.movies.some(m => m.id === id);
  }

  toggle(m: Movie): void {
    this.movies = this.has(m.id)
      ? this.movies.filter(x => x.id !== m.id)
      : [...this.movies, m];
    localStorage.setItem('wishlist', JSON.stringify(this.movies));
  }
}
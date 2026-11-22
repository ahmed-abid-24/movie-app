import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishlistStoreService } from '../wishlist-store.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-wishlist',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  store = inject(WishlistStoreService);
  imgUrl = environment.imgUrl;
}
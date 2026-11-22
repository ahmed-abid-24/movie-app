import { TestBed } from '@angular/core/testing';
import { WishlistStoreService } from './wishlist-store.service';

describe('WishlistStoreService', () => {
  let service: WishlistStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

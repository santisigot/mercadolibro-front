import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritesService, Product } from '../../services/favorites.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  favorites: Product[] = [];
  private favoritesService = inject(FavoritesService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.favoritesService.favorites$.subscribe((favs) => {
      this.favorites = favs;
    });
  }

  removeFavorite(productId: number): void {
    this.favoritesService.removeFavorite(productId);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  formatPrice(price: number): string {
    return `$${price.toLocaleString('es-AR')}`;
  }
}

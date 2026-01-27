import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  author?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  badge?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<Product[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    // Load favorites from localStorage if available
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        this.favoritesSubject.next(JSON.parse(savedFavorites));
      }
    }
  }

  getFavorites(): Product[] {
    return this.favoritesSubject.value;
  }

  addFavorite(product: Product): void {
    const currentFavorites = this.getFavorites();
    if (!currentFavorites.find((p) => p.id === product.id)) {
      const updatedFavorites = [...currentFavorites, product];
      this.favoritesSubject.next(updatedFavorites);
      this.saveToStorage(updatedFavorites);
    }
  }

  removeFavorite(productId: number): void {
    const updatedFavorites = this.getFavorites().filter((p) => p.id !== productId);
    this.favoritesSubject.next(updatedFavorites);
    this.saveToStorage(updatedFavorites);
  }

  isFavorite(productId: number): boolean {
    return this.getFavorites().some((p) => p.id === productId);
  }

  toggleFavorite(product: Product): void {
    if (this.isFavorite(product.id)) {
      this.removeFavorite(product.id);
    } else {
      this.addFavorite(product);
    }
  }

  private saveToStorage(favorites: Product[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
}

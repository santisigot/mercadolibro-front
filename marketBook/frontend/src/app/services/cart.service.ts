import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './favorites.service';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cartSubject.next(JSON.parse(savedCart));
      }
    }
  }

  getCartItems(): CartItem[] {
    return this.cartSubject.value;
  }

  addToCart(product: Product): void {
    const currentItems = this.getCartItems();
    const existingItem = currentItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      this.cartSubject.next([...currentItems]);
    } else {
      const newItem: CartItem = { ...product, quantity: 1 };
      const updatedItems = [...currentItems, newItem];
      this.cartSubject.next(updatedItems);
    }
    this.saveToStorage(this.getCartItems());
  }

  removeFromCart(productId: number): void {
    const updatedItems = this.getCartItems().filter((item) => item.id !== productId);
    this.cartSubject.next(updatedItems);
    this.saveToStorage(updatedItems);
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentItems = this.getCartItems();
    const item = currentItems.find((i) => i.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.cartSubject.next([...currentItems]);
      this.saveToStorage(currentItems);
    }
  }

  clearCart(): void {
    this.cartSubject.next([]);
    this.saveToStorage([]);
  }

  getTotalPrice(): number {
    return this.getCartItems().reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getTotalQuantity(): number {
    return this.getCartItems().reduce((total, item) => total + item.quantity, 0);
  }

  private saveToStorage(cart: CartItem[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
}

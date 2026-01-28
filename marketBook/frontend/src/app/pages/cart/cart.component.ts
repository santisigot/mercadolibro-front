import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice = 0;
  totalQuantity = 0;
  selectedPaymentMethod = 'credit';

  private cartService = inject(CartService);

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
  }

  removeItem(productId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este libro del carrito?')) {
      this.cartService.removeFromCart(productId);
    }
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  formatPrice(price: number): string {
    return `$${price.toLocaleString('es-AR')}`;
  }

  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }
}

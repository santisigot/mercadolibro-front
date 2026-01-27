import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FavoritesService, Product } from '../../services/favorites.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-book-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-listing.component.html',
  styleUrl: './book-listing.component.scss',
})
export class BookListingComponent implements OnInit {
  title = '';
  books: Product[] = [];
  
  private route = inject(ActivatedRoute);
  private favoritesService = inject(FavoritesService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.route.url.subscribe(url => {
        const path = url[0].path;
        this.loadSection(path);
    });
  }

  loadSection(section: string) {
    if (section === 'destacados') {
      this.title = 'Libros Destacados';
      this.books = [
        { id: 1, title: 'Inteligencia Artificial para principiantes', author: 'Tech Author', price: 9500, originalPrice: 12000, discount: 20, image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop' },
        { id: 2, title: 'El Viejo que no Odiaba', author: 'Famous Writer', price: 8400, originalPrice: 10500, discount: 20, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop' },
        { id: 3, title: 'Anatomía del Mal', author: 'Thriller Author', price: 8800, originalPrice: 11000, discount: 20, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop' },
        { id: 4, title: 'Breve Historia de la Tierra', author: 'Science Writer', price: 8800, originalPrice: 11000, discount: 20, image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop' },
        { id: 5, title: 'Los Guardianes de la Noche', author: 'Fantasy Author', price: 8800, originalPrice: 11000, discount: 20, image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=450&fit=crop' },
        { id: 15, title: 'Los Guardianes de la Noche', author: 'Fantasy Author', price: 8800, originalPrice: 11000, discount: 20, image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop' },
        // demonstration books
        { id: 101, title: 'La Sombra del Viento', author: 'Carlos Ruiz Zafón', price: 12500, originalPrice: 15000, discount: 15, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop' },
        { id: 102, title: 'El Juego del Ángel', author: 'Carlos Ruiz Zafón', price: 13000, image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop' }
      ];
    } else if (section === 'mas-vendidos') {
      this.title = 'Más Vendidos';
      this.books = [
        { id: 6, title: 'Utopías Digitales', price: 12800, author: 'Digital Mind', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=450&fit=crop' },
        { id: 7, title: 'Amsterdam', price: 7800, author: 'Travel Writer', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=450&fit=crop' },
        { id: 8, title: 'Sueños y votos del Amargo Espíritu', price: 9400, author: 'Poetry Star', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop' },
        { id: 9, title: 'El Tren de las 4:50', price: 14800, author: 'Classic Mystery', image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=450&fit=crop' },
        { id: 10, title: 'Boy Rey', price: 12500, author: 'Modern Fiction', image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=300&h=450&fit=crop' },
        { id: 69, title: 'Utopías Digitales', price: 12800, author: 'Digital Mind', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=450&fit=crop' },
        // demonstration books
        { id: 201, title: 'Sapiens', author: 'Yuval Noah Harari', price: 18000, image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop' },
        { id: 202, title: 'Homo Deus', author: 'Yuval Noah Harari', price: 19500, image: 'https://images.unsplash.com/photo-1506880018603-83ca734da794?w=300&h=450&fit=crop' }
      ];
    } else if (section === 'nuevos') {
      this.title = 'Nuevos Lanzamientos';
      this.books = [
        { id: 11, title: 'El Código del Futuro', price: 11200, author: 'SciFi Master', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop' },
        { id: 12, title: 'Memorias de un Viajero', price: 9800, author: 'Globenomad', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop' },
        { id: 13, title: 'La Última Batalla', price: 13500, author: 'Epic Saga', image: 'https://images.unsplash.com/photo-1506880018603-83ca734da794?w=300&h=450&fit=crop' },
        { id: 14, title: 'Secretos del Océano', price: 10200, author: 'Nature Dev', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=450&fit=crop' },
        { id: 15, title: 'Crónicas del Tiempo', price: 12000, author: 'Time Lord', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=450&fit=crop' },
        { id: 16, title: 'Crónicas del Tiempo', price: 12000, author: 'Time Lord', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=450&fit=crop' },
        // demonstration books
        { id: 301, title: 'Cosas que nunca dijimos', author: 'Romance Writer', price: 9000, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop' },
        { id: 302, title: 'La Ciudad de Vapor', author: 'Carlos Ruiz Zafón', price: 11000, image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop' }
      ];
    }
  }

  isFavorite(productId: number): boolean {
    return this.favoritesService.isFavorite(productId);
  }

  toggleFavorite(product: Product): void {
    this.favoritesService.toggleFavorite(product);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  formatPrice(price: number): string {
    return `$${price.toLocaleString('es-AR')}`;
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FavoritesService, Product } from '../../services/favorites.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private favoritesService = inject(FavoritesService);
  private cartService = inject(CartService);

  product: Product | undefined;
  activeTab: 'info' | 'reviews' = 'info';

  // Mock data for demonstration
  private allProducts: Product[] = [
    {
      id: 1,
      title: 'Descubre Nuevos Mundos',
      author: 'Elena Velázquez',
      price: 15900,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=1000&fit=crop',
      isbn: '978-84-12345-67-8',
      publicationDate: '15 de Mayo, 2024',
      editorial: 'Nova Ediciones',
      language: 'Español',
      description: 'Una fascinante aventura que desafía los límites de la realidad. Acompaña a nuestros protagonistas en un viaje épico a través de dimensiones desconocidas, donde cada descubrimiento cambia para siempre su percepción del universo.',
      rating: 4.8,
      reviewsCount: 124,
      reviews: [
        { user: 'Juan Pérez', rating: 5, comment: 'Sencillamente increíble. No pude dejar de leer.', date: '20 Jan 2026' },
        { user: 'María García', rating: 4, comment: 'Muy buena trama, aunque el final me dejó con dudas.', date: '15 Jan 2026' }
      ]
    },
    {
      id: 2,
      title: 'Los Más Vendidos',
      author: 'Marco Aurelio',
      price: 12500,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=1000&fit=crop',
      isbn: '978-84-98765-43-2',
      publicationDate: '10 de Marzo, 2023',
      editorial: 'Clásicos Modernos',
      language: 'Español',
      description: 'Una recopilación de las reflexiones más profundas sobre la vida, el éxito y la persistencia. Este libro se ha convertido en un referente indispensable para quienes buscan crecimiento personal y profesional.',
      rating: 4.9,
      reviewsCount: 856,
      reviews: [
        { user: 'Carlos Ruiz', rating: 5, comment: 'Un libro que todo el mundo debería leer al menos una vez.', date: '12 Jan 2026' }
      ]
    },
    {
      id: 101,
      title: 'Sombras del Pasado',
      author: 'Elena Martínez',
      price: 18500,
      image: 'https://images.unsplash.com/photo-1543004218-ee141104523e?w=800&h=1000&fit=crop',
      isbn: '978-84-11111-11-1',
      publicationDate: '12 de Abril, 2024',
      editorial: 'Misterio Press',
      language: 'Español',
      description: 'Un thriller psicológico que te mantendrá en vilo hasta la última página. Cuando los secretos mejor guardados salen a la luz, nadie está a salvo.',
      rating: 4.7,
      reviewsCount: 45,
      reviews: []
    }
  ];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.allProducts.find(p => p.id === id);
    
    // Fallback info if product is not in mock list (for books from categories)
    if (!this.product) {
       // We could try to get it from a global service or just show placeholders
       this.product = {
         id,
         title: 'Libro Ejemplar',
         author: 'Autor Desconocido',
         price: 15000,
         image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&h=1000&fit=crop',
         isbn: '978-0-00-000000-0',
         publicationDate: 'Desconocida',
         editorial: 'Editorial Genérica',
         language: 'Español',
         description: 'Esta es una descripción corta para un libro que no se encuentra en nuestra base de datos de ejemplo local.',
         rating: 4.0,
         reviewsCount: 12
       };
    }
  }

  getStars(rating = 0): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }

  toggleFavorite(): void {
    if (this.product) {
      this.favoritesService.toggleFavorite(this.product);
    }
  }

  isFavorite(): boolean {
    return this.product ? this.favoritesService.isFavorite(this.product.id) : false;
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  isInCart(): boolean {
    return this.product ? this.cartService.isInCart(this.product.id) : false;
  }
}

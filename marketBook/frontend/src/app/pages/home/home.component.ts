import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritesService, Product } from '../../services/favorites.service';
import { CartService } from '../../services/cart.service';

interface CarouselSlide {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  badge: string;
  gradient: string;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  currentCategorySlide = 0;
  private carouselInterval: ReturnType<typeof setInterval> | null = null;
  private categoryCarouselInterval: ReturnType<typeof setInterval> | null = null;

  private favoritesService = inject(FavoritesService);
  private cartService = inject(CartService);

  toggleFavorite(product: Product): void {
    this.favoritesService.toggleFavorite(product);
  }

  isFavorite(productId: number): boolean {
    return this.favoritesService.isFavorite(productId);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  isInCart(productId: number): boolean {
    return this.cartService.isInCart(productId);
  }

  // Carousel slides
  carouselSlides: CarouselSlide[] = [
    {
      badge: 'Nuevo Lanzamiento',
      title: 'Descubre Nuevos Mundos',
      subtitle: 'La colección más esperada del año ya está aquí. Historias que te transportarán a lugares increíbles.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=510&h=710&fit=crop',
      buttonText: 'Explorar Ahora',
      gradient: 'linear-gradient(135deg, #c62828 0%, #d32f2f 50%, #e53935 100%)',
      link: '/destacados'
    },
    {
      badge: 'Bestseller',
      title: 'Los Más Vendidos',
      subtitle: 'Únete a millones de lectores que ya disfrutan de estas increíbles historias.',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=510&h=710&fit=crop',
      buttonText: 'Ver Colección',
      gradient: 'linear-gradient(135deg, #b71c1c 0%, #c62828 50%, #d32f2f 100%)',
      link: '/mas-vendidos'
    },
    {
      badge: 'Ofertas Especiales',
      title: 'Grandes Descuentos',
      subtitle: 'Aprovecha nuestras ofertas exclusivas en los mejores títulos del momento.',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=510&h=710&fit=crop',
      buttonText: '',
      gradient: 'linear-gradient(135deg, #8b1a1a 0%, #b71c1c 50%, #c62828 100%)',
      link: '/mas-vendidos'
    }
  ];

  // Featured Books Carousel (Advertisement)
  featuredCarouselBooks = [
    {
      id: 1,
      title: 'Cien Años de Soledad',
      author: 'Gabriel García Márquez',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
      price: 15900,
      badge: 'Clásico'
    },
    {
      id: 2,
      title: 'El Principito',
      author: 'Antoine de Saint-Exupéry',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
      price: 8900,
      badge: 'Bestseller'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop',
      price: 12500,
      badge: 'Recomendado'
    },
    {
      id: 4,
      title: 'Orgullo y Prejuicio',
      author: 'Jane Austen',
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
      price: 11200,
      badge: 'Romance'
    },
    {
      id: 5,
      title: 'El Hobbit',
      author: 'J.R.R. Tolkien',
      image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop',
      price: 14800,
      badge: 'Fantasía'
    },
    {
      id: 6,
      title: 'Crimen y Castigo',
      author: 'Fyodor Dostoevsky',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop',
      price: 13900,
      badge: 'Clásico'
    }
  ];

  // Libros destacados
  featuredBooks: Product[] = [
    {
      id: 1,
      title: 'Inteligencia Artificial para principiantes',
      author: 'Tech Author',
      price: 9500,
      originalPrice: 12000,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop'
    },
    {
      id: 2,
      title: 'El Viejo que no Odiaba',
      author: 'Famous Writer',
      price: 8400,
      originalPrice: 10500,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop'
    },
    {
      id: 3,
      title: 'Anatomía del Mal',
      author: 'Thriller Author',
      price: 8800,
      originalPrice: 11000,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop'
    },
    {
      id: 4,
      title: 'Breve Historia de la Tierra',
      author: 'Science Writer',
      price: 8800,
      originalPrice: 11000,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop'
    },
    {
      id: 5,
      title: 'Los Guardianes de la Noche',
      author: 'Fantasy Author',
      price: 8800,
      originalPrice: 11000,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=450&fit=crop'
    },
    {
      id: 15,
      title: 'Los Guardianes de la Noche',
      author: 'Fantasy Author',
      price: 8800,
      originalPrice: 11000,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop'
    }
  ];

  // Más vendidos
  bestSellers: Product[] = [
    {
      id: 6,
      title: 'Utopías Digitales',
      price: 12800,
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=450&fit=crop'
    },
    {
      id: 7,
      title: 'Amsterdam',
      price: 7800,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=450&fit=crop'
    },
    {
      id: 8,
      title: 'Sueños y votos del Amargo Espíritu',
      price: 9400,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop'
    },
    {
      id: 9,
      title: 'El Tren de las 4:50',
      price: 14800,
      image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=450&fit=crop'
    },
    {
      id: 10,
      title: 'Boy Rey',
      price: 12500,
      image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=300&h=450&fit=crop'
    },
    {
      id: 69,
      title: 'Utopías Digitales',
      price: 12800,
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=450&fit=crop'
    }
  ];

  // Nuevos lanzamientos
  newReleases: Product[] = [
    {
      id: 11,
      title: 'El Código del Futuro',
      price: 11200,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop'
    },
    {
      id: 12,
      title: 'Memorias de un Viajero',
      price: 9800,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop'
    },
    {
      id: 13,
      title: 'La Última Batalla',
      price: 13500,
      image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=450&fit=crop'
    },
    {
      id: 14,
      title: 'Secretos del Océano',
      price: 10200,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=450&fit=crop'
    },
    {
      id: 15,
      title: 'Crónicas del Tiempo',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=450&fit=crop'
    },
    {
      id: 16,
      title: 'Crónicas del Tiempo',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=450&fit=crop'
    }
  ];

  ngOnInit() {
    this.startCarousel();
    this.startCategoryCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
    this.stopCategoryCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  startCategoryCarousel() {
    this.categoryCarouselInterval = setInterval(() => {
      this.nextCategorySlide();
    }, 4000);
  }

  stopCategoryCarousel() {
    if (this.categoryCarouselInterval) {
      clearInterval(this.categoryCarouselInterval);
    }
  }

  nextCategorySlide() {
    const itemsPerSlide = this.getBooksPerSlide();
    const maxSlide = Math.ceil(this.featuredCarouselBooks.length / itemsPerSlide) - 1;
    this.currentCategorySlide = (this.currentCategorySlide + 1) % (maxSlide + 1);
  }

  prevCategorySlide() {
    const itemsPerSlide = this.getBooksPerSlide();
    const maxSlide = Math.ceil(this.featuredCarouselBooks.length / itemsPerSlide) - 1;
    this.currentCategorySlide = this.currentCategorySlide === 0 ? maxSlide : this.currentCategorySlide - 1;
  }

  getBooksPerSlide(): number {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  }

  getVisibleFeaturedBooks() {
    const itemsPerSlide = this.getBooksPerSlide();
    const start = this.currentCategorySlide * itemsPerSlide;
    return this.featuredCarouselBooks.slice(start, start + itemsPerSlide);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.carouselSlides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  formatPrice(price: number): string {
    return `$${price.toLocaleString('es-AR')}`;
  }
}

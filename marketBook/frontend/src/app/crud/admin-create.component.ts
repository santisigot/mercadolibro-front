import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-admin-create',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin-create.component.html',
  styleUrl: './admin-create.component.scss',
})
export class AdminCreateComponent {
  isbn = '';
  nombre = '';
  editorial = '';
  idioma = 'Español';
  descripcion = '';
  showSuccess = false;

  idiomas = ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués'];

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  onSubmit() {
    const newBook = {
      isbn: this.isbn,
      nombre: this.nombre,
      editorial: this.editorial,
      idioma: this.idioma,
      descripcion: this.descripcion
    };

    this.bookService.addBook(newBook);
    console.log('Libro creado:', newBook);
    
    this.showSuccess = true;
    setTimeout(() => {
      this.resetForm();
      this.showSuccess = false;
    }, 2000);
  }

  resetForm() {
    this.isbn = '';
    this.nombre = '';
    this.editorial = '';
    this.idioma = 'Español';
    this.descripcion = '';
  }

  goBack() {
    this.router.navigate(['/admin']);
  }
}

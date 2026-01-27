import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService, Book } from '../services/book.service';

@Component({
  selector: 'app-admin-update',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin-update.component.html',
  styleUrl: './admin-update.component.scss',
})
export class AdminUpdateComponent implements OnInit {
  books: Book[] = [];
  selectedBookId: number | null = null;
  
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

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  onBookSelect() {
    if (this.selectedBookId) {
      const book = this.bookService.getBookById(this.selectedBookId);
      if (book) {
        this.isbn = book.isbn;
        this.nombre = book.nombre;
        this.editorial = book.editorial;
        this.idioma = book.idioma;
        this.descripcion = book.descripcion;
      }
    }
  }

  onSubmit() {
    if (this.selectedBookId) {
      const updatedBook = {
        isbn: this.isbn,
        nombre: this.nombre,
        editorial: this.editorial,
        idioma: this.idioma,
        descripcion: this.descripcion
      };

      this.bookService.updateBook(this.selectedBookId, updatedBook);
      console.log('Libro actualizado:', updatedBook);
      
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
        this.resetForm();
      }, 2000);
    }
  }

  resetForm() {
    this.selectedBookId = null;
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

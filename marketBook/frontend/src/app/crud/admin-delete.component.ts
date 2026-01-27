import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BookService, Book } from '../services/book.service';

@Component({
  selector: 'app-admin-delete',
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-delete.component.html',
  styleUrl: './admin-delete.component.scss',
})
export class AdminDeleteComponent implements OnInit {
  books: Book[] = [];
  bookToDelete: Book | null = null;
  showSuccess = false;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.books = this.bookService.getBooks();
  }

  confirmDelete(book: Book) {
    this.bookToDelete = book;
  }

  cancelDelete() {
    this.bookToDelete = null;
  }

  deleteBook() {
    if (this.bookToDelete) {
      this.bookService.deleteBook(this.bookToDelete.id);
      console.log('Libro eliminado:', this.bookToDelete);
      
      this.showSuccess = true;
      this.bookToDelete = null;
      this.loadBooks();
      
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    }
  }

  goBack() {
    this.router.navigate(['/admin']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BookService, Book } from '../services/book.service';

@Component({
  selector: 'app-admin-read',
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-read.component.html',
  styleUrl: './admin-read.component.scss',
})
export class AdminReadComponent implements OnInit {
  books: Book[] = [];

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

  goBack() {
    this.router.navigate(['/admin']);
  }
}

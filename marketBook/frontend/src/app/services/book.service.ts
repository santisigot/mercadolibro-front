import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  isbn: string;
  nombre: string;
  editorial: string;
  idioma: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      isbn: '978-3-16-148410-0',
      nombre: 'El Quijote',
      editorial: 'Cervantes',
      idioma: 'Español',
      descripcion: 'Un clásico de la literatura española.'
    },
    {
      id: 2,
      isbn: '978-0-12-345678-9',
      nombre: 'Cien años de soledad',
      editorial: 'Sudamericana',
      idioma: 'Español',
      descripcion: 'La obra maestra de Gabriel García Márquez.'
    }
  ];

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book | undefined {
    return this.books.find(b => b.id === id);
  }

  addBook(book: Omit<Book, 'id'>): void {
    const newBook = {
      ...book,
      id: this.books.length > 0 ? Math.max(...this.books.map(b => b.id)) + 1 : 1
    };
    this.books.push(newBook);
  }

  updateBook(id: number, updatedBook: Omit<Book, 'id'>): void {
    const index = this.books.findIndex(b => b.id === id);
    if (index !== -1) {
      this.books[index] = { ...updatedBook, id };
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(b => b.id !== id);
  }
}

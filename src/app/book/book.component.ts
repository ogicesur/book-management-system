import { Component, OnInit } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-book-management',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  newBookTitle: string = '';
  newBookAuthor: string = '';
  books: Book[] = [];

  ngOnInit(): void {
    const books = localStorage.getItem('books');
    if (books) {
      this.books = JSON.parse(books);
    }
  }

  addBook() {
    if (!this.newBookTitle.trim.length && !this.newBookAuthor.trim.length) {
      let newBook: Book = {
        id: this.books.length + 1,
        title: this.newBookTitle,
        author: this.newBookAuthor
      };
      this.books.push(newBook);
      this.newBookTitle = '';
      this.newBookAuthor = '';
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

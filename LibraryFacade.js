import { Book } from "./Book.js";
export class LibraryFacade {
    constructor() {
        this.books = [];
    }

    addBook(author, title, publisher, year) {
        const book = new Book(author, title, publisher, year);
        this.books.push(book);
    }

    getBooks() {
        return this.books;
    }
}
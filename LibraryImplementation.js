import { Book } from "./Book.js";
export class LibraryImplementation {// Bridge Pattern 
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getBooks() {
        return this.books;
    }
}

export class LibraryInterface {
    constructor(libraryImplementation) {
        this.library = libraryImplementation;
    }

    addBook(author, title, publisher, year) {
        const book = new Book(author, title, publisher, year);
        this.library.addBook(book);
    }

    getBooks() {
        return this.library.getBooks();
    }
}

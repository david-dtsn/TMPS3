
// Proxy Pattern - clasa de control
export class BookProxy {
    constructor(book) {
        this.book = book;
    }

    get author() {
        return this.book.author;
    }

    get title() {
        return this.book.title;
    }

    get publisher() {
        return this.book.publisher;
    }

    get year() {
        return this.book.year;
    }
}
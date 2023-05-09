export class BookDecorator {// Decorator Pattern - clasa pentru de adaugare a functionalitatilor
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

    getDetails() {
        return `${this.title} by ${this.author} (${this.year}), published by ${this.publisher}`;
    }
}

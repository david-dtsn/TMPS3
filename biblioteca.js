// Clasa de baza
import { Book } from "./Book.js";
// Facade Pattern - clasa a reduce complixitatea sistemului
import { LibraryFacade } from "./LibraryFacade.js";
//--
import { BookProxy } from "./BookProxy.js";
import { BookDecorator } from "./BookDecorator.js";
import { LibraryImplementation } from "./LibraryImplementation.js";
import { LibraryInterface } from "./LibraryImplementation.js";



const library = new LibraryFacade();
library.addBook("Orice", "Oricine", "Orice", "oriceData");

const libraryInterface = new LibraryInterface(new LibraryImplementation());
libraryInterface.addBook("Orice", "Oricine", "Orice", "oriceData");

const book = new Book("Orice2", "2", "Orice2", "oriceData2");
const bookProxy = new BookProxy(book);
console.log(bookProxy.author);

const bookDecorator = new BookDecorator(book);
console.log(bookDecorator.getDetails());

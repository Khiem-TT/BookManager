import {Book} from "./Book";
import {BookManager} from "./BookManager";

let book1 = new Book('B001', 'Lập trình Java');
let book2 = new Book('B002', 'Lập trình PHP');
let book3 = new Book('B003', 'Lập trình TypeScript');

let bookManager = new BookManager();
bookManager.addBook(book1);
bookManager.addBook(book2);
bookManager.addBook(book3);

bookManager.update('B003', 'lập trình MySQL');
bookManager.delete('B001');

console.log(bookManager.getList());
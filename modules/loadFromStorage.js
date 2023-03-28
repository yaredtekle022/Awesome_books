import displayBooks from "./displayBooks.js";
import Book from "./book.js";
export default loadFromStorage = () => {
    const ld = new Book();
    const storedBookList = localStorage.getItem('bookLists');
    if (storedBookList) {
      booklist = JSON.parse(storedBookList);
      ld.displayBooks();
    }
  }
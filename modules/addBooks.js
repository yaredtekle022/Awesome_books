 // Function to add new books
 import Book from "./book";
 export default addBooks = (ttle, athr) =>  {
    const bk = new Book();
    const book = { title: '', author: '' };
    book.title = ttle;
    book.author = athr;
    booklist.push(book);
    bk.updateStorage(booklist);
  }

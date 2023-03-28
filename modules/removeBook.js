// Remove title function
import Book from "./book.js";
export default removeBook = (title) => {
  const rm = new Book();
  for (let i = booklist.length - 1; i >= 0; i -= 1) {
    if (booklist[i].title === title) {
      booklist.splice(i, 1);
      rm.updateStorage(booklist);
      break;
    }
  }
}
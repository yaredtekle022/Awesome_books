
  // Function to display the book's list
  import Book from "./book.js";
  import removeBook from "./removeBook.js"; 
  export default displayBooks = () =>  {
    document.getElementById('book-list-container').innerHTML = '<h2 class="list-title">List of books</h2>';
    booklist.forEach((book) => {
      const bookItem = document.createElement('div');
      const booksTable = document.getElementById('book-list-container');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
      <div class="container">
          <p>${book.title}, by ${book.author}</p>
          <button class="remove" id=${book.title}>Remove</button>
      </div>
      <hr/>
      `;
      booksTable.appendChild(bookItem);

      const removeBtn = bookItem.querySelector('.remove');
      removeBtn.addEventListener('click', () => {
        const rm = new Book();
        rm.removeBook(book.title);
        rm.displayBooks();
      });
    });
  }
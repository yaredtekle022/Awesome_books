var booklist = [];
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");
const bookTitle = document.getElementById("book-title");
const author = document.getElementById("author");

// Storage

function updateStorage(data) {
  localStorage.setItem('bookLists', JSON.stringify(data));
};
function getLocalStorage (data){
  JSON.parse(localStorage.getItem('booklist'));

};

function loadFromStorage() {
  const storedBookList = localStorage.getItem('bookLists');
  if (storedBookList) {
      booklist = JSON.parse(storedBookList);
      displayBooks();
  }
}


//Remove title function

function removeBook(title) {
  booklist = booklist.filter(book => book.title !== title);
  updateStorage(booklist);
}

// Function to display the book's list

function displayBooks() {
  document.getElementById("book-list-container").innerHTML = "";
  booklist.forEach((book) => {
    const bookItem = document.createElement('div');
    const booksTable = document.getElementById("book-list-container");
    bookItem.classList.add("book-item")
    bookItem.innerHTML = `
        <p>Book title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <button class="remove" id=${book.title}>Remove</button>
      <hr/>`;
      booksTable.appendChild(bookItem);

      const removeBtn = bookItem.querySelector(".remove");
    removeBtn.addEventListener("click", () => {
      removeBook(book.title);
      displayBooks();
    });
      
  });
}

// Function to add new books
function addBooks (ttle, athr) {
  const book = {title:"", author: ""};
  book.title = ttle;
  book.author = athr;
  booklist.push(book);
  updateStorage(booklist)
}

// Event listener to add books

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(bookTitle.value !=="" && author.value !== ""){
    addBooks(bookTitle.value, author.value);
  form.reset();
  displayBooks();
  }else {
    alert("fill the required fields before submiting")
  }
});
document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();
});



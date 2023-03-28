export default class Book {
    updateStorage(data) {
      localStorage.setItem('bookLists', JSON.stringify(data));
    }
  }
  
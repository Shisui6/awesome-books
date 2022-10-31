// Declare local library array
const library = [];

// Create class declaration for books in library
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    library.push(this);
  };

  removeBook = () => {
    const index = library.indexOf(this.id);
    library.splice(index, 1);
  };
}

export { Book, library };
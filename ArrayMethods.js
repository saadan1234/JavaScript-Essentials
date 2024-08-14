const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationYear: 1960,
      isbn: "978-0061120084",
      pages: 281
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publicationYear: 1949,
      isbn: "978-0451524935",
      pages: 328
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      publicationYear: 1925,
      isbn: "978-0743273565",
      pages: 180
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publicationYear: 1813,
      isbn: "978-1503290563",
      pages: 279,
      likes : ["SC", "Youtube"],
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publicationYear: 1951,
      isbn: "978-0316769488",
      pages: 214,
      likes : ["Insta", "Facebook", "SC", "Youtube"],
    }
];

// Can use multiple filters as well.
const fBook = books.filter(book=>book.pages>=270);
fBook;

// Callback function calls all the books
const allPages = fBook.reduce((acc,book)=>acc + book.pages,0);
allPages;
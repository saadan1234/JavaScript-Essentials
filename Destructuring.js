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

function getBooks(){
    return books;
}

function getBookById(isbn){
    return books.find((books)=> books.isbn === isbn);
}

//Destructuring in objects
const book = getBookById("978-0316769488");

//Use {} brackets for array manipulation.
const {title, isbn, publicationYear} = book;
title;
isbn;
publicationYear;

//Destructuring in arrays
const likes = getBookById("978-0316769488").likes ;

// Rest Operator takes all the remaining arguments. Always on last.
const [firstLikes, secondLikes, ...otherLikes] = likes;

//Use [] brackets for array manipulation.
firstLikes;
secondLikes;
otherLikes;

//Using spread operator for arrays. Gives all the values present.
const newLikes = [...likes, "newLike"];
newLikes;

//Using spread operator for object. Gives all the values present.
const updatedBook = {...book,watched:"Yes",  publicationYear: 1953}
updatedBook;

// Rest: Takes multiple values. 
// Spread: Provides multiple values. 


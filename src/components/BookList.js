// BookList.js
import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, updateRating, deleteBook }) => (
  <div>
    {books.map(book => (
      <BookItem key={book.isbn} book={book} updateRating={updateRating} deleteBook={deleteBook} />
    ))}
  </div>
);

export default BookList;

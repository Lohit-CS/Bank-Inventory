// BookItem.js
import React from 'react';
import Rating from './Rating';

const BookItem = ({ book, updateRating, deleteBook }) => (
  <div>
    <img src={book.cover ? book.cover.medium : ''} alt={book.title} />
    <h3>{book.title}</h3>
    <p>{book.authors.map(author => author.name).join(', ')}</p>
    <p>{book.isbn}</p>
    <Rating rating={book.rating} updateRating={(rating) => updateRating(book.isbn, rating)} />
    <button onClick={() => deleteBook(book.isbn)}>Delete</button>
  </div>
);

export default BookItem;

// src/components/BookForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { validateISBN } from '../utils/validateISBN';

const BookForm = ({ addBook }) => {
  const [isbn, setIsbn] = useState('');
  const [error, setError] = useState('');

  const fetchBookDetails = async (isbn) => {
    try {
      const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
      const bookData = response.data[`ISBN:${isbn}`];
      if (bookData) {
        addBook({ isbn, title: bookData.title, authors: bookData.authors, cover: bookData.cover, rating: 0 });
        setIsbn('');
      } else {
        setError('Book not found');
      }
    } catch (err) {
      setError('Error fetching book details');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateISBN(isbn)) {
      fetchBookDetails(isbn);
    } else {
      setError('Invalid ISBN');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        placeholder="Enter ISBN"
        required
      />
      <button type="submit">Add Book</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default BookForm;

// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { getBooks, saveBooks } from './services/bookService';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);

  const addBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    saveBooks(updatedBooks);
  };

  const updateRating = (isbn, rating) => {
    const updatedBooks = books.map(book =>
      book.isbn === isbn ? { ...book, rating } : book
    );
    setBooks(updatedBooks);
    saveBooks(updatedBooks);
  };

  const deleteBook = (isbn) => {
    const updatedBooks = books.filter(book => book.isbn !== isbn);
    setBooks(updatedBooks);
    saveBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h1>Book Inventory Manager</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} updateRating={updateRating} deleteBook={deleteBook} />
    </div>
  );
};

export default App;

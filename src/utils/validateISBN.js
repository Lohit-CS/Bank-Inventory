// src/utils/validateISBN.js
export const validateISBN = (isbn) => {
    const cleanedIsbn = isbn.replace(/-/g, '');
    return cleanedIsbn.length === 10 || cleanedIsbn.length === 13;
  };
  
// bookService.js
export const getBooks = () => {
    return JSON.parse(localStorage.getItem('books')) || [];
  };
  
  export const saveBooks = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  };
  
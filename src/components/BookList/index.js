import React from 'react';
import CardBook from '../CardBook';
import './BookList.css';

const BookList = ({ books }) => {
  if (!Array.isArray(books)) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <CardBook key={book.ISBN} book={book}></CardBook>
      ))}
    </div>
  );
};

export default BookList;
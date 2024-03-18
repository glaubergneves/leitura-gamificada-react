import React from 'react';
import './CardBook.css';

const CardBook = ({ book }) => {
  return (
    <div className="card-book">
      <img src={book.cover} alt={`Capa de ${book.title}`} />
      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>
      <p>Páginas: {book.pages}</p>
      <p><strong>Por apenas: {book.price}</strong></p>
    </div>
  );
};

export default CardBook;
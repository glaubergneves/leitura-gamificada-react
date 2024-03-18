import React, { useState, useEffect } from 'react';
import BookList from '../../components/BookList';

const BookListPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json');
        const data = await response.json();
        const booksArray = Object.values(data);
        setBooks(booksArray);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Livros Cadastrados</h1>
      <BookList books={books} />
    </div>
  );
};

export default BookListPage;
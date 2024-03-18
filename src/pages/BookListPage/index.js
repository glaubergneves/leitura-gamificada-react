import React, { useState, useEffect } from "react";
import BookList from "../../components/BookList";
import CampoTexto from "../../components/CampoTexto";

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [filtroTitulo, setFiltroTitulo] = useState("");
  const [filtroAutor, setFiltroAutor] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [livrosFiltrados, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json"
        );
        const data = await response.json();
        const booksArray = Object.values(data);
        setBooks(booksArray);
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const applyFilters = () => {
    const filtered = books.filter((book) => {
      if (
        filtroTitulo &&
        !book.title.toLowerCase().includes(filtroTitulo.toLowerCase())
      ) {
        return false;
      }
      if (
        filtroAutor &&
        !book.author.toLowerCase().includes(filtroAutor.toLowerCase())
      ) {
        return false;
      }
      if (
        filtroCategoria &&
        !book.genre.toLowerCase().includes(filtroCategoria.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
    setFilteredBooks(filtered);
  };

  React.useEffect(() => {
    applyFilters();
  }, [filtroTitulo, filtroAutor, filtroCategoria]);

  return (
    <div>
      <CampoTexto
        value={filtroTitulo}
        placeholder="Filtrar por título"
        obrigatorio={false}
        aoAlterado={(valor) => setFiltroTitulo(valor)}
      ></CampoTexto>
      <CampoTexto
        value={filtroAutor}
        placeholder="Filtrar por autor"
        obrigatorio={false}
        aoAlterado={(valor) => setFiltroAutor(valor)}
      ></CampoTexto>
      <CampoTexto
        value={filtroCategoria}
        placeholder="Filtrar por categoria"
        obrigatorio={false}
        aoAlterado={(valor) => setFiltroCategoria(valor)}
      ></CampoTexto>

      <h1>Lista de Livros Cadastrados</h1>
      {livrosFiltrados.length === 0 ? (
        <div>
          <h3>Sem livros com esses filtros...</h3>
          <BookList books={books} />
        </div>
      ) : (
        <BookList books={livrosFiltrados} />
      )}
    </div>
  );
};

export default BookListPage;

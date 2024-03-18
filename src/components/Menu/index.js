import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  return (
    <nav className="topbar">
      <div className="topbar-inner">
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/books">Lista de Livros</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
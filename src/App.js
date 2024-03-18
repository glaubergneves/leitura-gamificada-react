import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import BookListPage from './pages/BookListPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Routes>
          <Route path="/books" element={<BookListPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
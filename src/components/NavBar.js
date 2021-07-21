import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

function NavBar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Justas reading list</h1>
      <p>Currently you have read {books.length} books</p>
    </div>
  );
}

export default NavBar;

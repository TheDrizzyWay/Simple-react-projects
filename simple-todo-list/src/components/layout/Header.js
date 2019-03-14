import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Header = () => {
  return (
    <header className="header">
      <h1>TodoList</h1>
      <Link to="/" className="link-style">Home</Link> |{' '}
      <Link to="/about" className="link-style">About</Link>
    </header>
  )
}

export default Header;

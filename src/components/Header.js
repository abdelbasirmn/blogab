import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Abdelbasir Blog</h1>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

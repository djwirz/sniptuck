import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <div>
        <h1>Snip Tuck</h1>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/search"> Search </Link>
            </li>
            <li>
              <Link to="/testing"> Testing </Link>
            </li>
            <li>
              <Link to="/manage"> Manage </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

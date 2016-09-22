import React from 'react';

const Header = () => {
  return (
    <header>
      <div>
        <h1>Snip Tuck</h1>
        <nav>
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/search"> Search </a>
            </li>
            <li>
              <a href="/testing"> Testing </a>
            </li>
            <li>
              <a href="/manage"> Manage </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

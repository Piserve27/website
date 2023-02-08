
import React from 'react';
import './Nav.css';
import cup from './coffee1.png';
import { cleanup } from '@testing-library/react';

function Nav() {
  return (
    <div className="Navbar">
      <header className="App-header">
        <h2 className='head-name'>CoffeeBeans<img src={cup} className="App-logo" alt="logo" />
        </h2>
        <ul className='menu'>
          <li><a href=''>About</a></li>
          <li><a href=''>Blog</a></li>
          <li><a href=''>Contact</a></li>
        </ul>
      </header>
    </div>
  );
  
}


export default Nav;

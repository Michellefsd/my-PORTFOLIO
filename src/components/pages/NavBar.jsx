import './NavBar.css';
import React from 'react';
import '../Button.css';

function NavBar() {
  return (
    <nav className="navbar">
        <h4 className='my-name'>Michelle Rodriguez <span>Front-End Dev</span></h4>
        <a href="./Contact.jsx" className='btn--small btn--orange'>Contact</a>
    </nav>

  );
}

export default NavBar;
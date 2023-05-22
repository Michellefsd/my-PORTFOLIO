import './NavBar.css';
import React from 'react';
import '../Button.css';

function NavBar({ handleClick }) {
  return (
    <nav id="navbar" className="navbar">
      <h4 className='my-name'>Michelle Rodriguez <span>Front-End Dev</span></h4>
      <button onClick={handleClick} className='margin-right btn--small btn--orange'>Contact</button>
    </nav>

  );
}

export default NavBar;
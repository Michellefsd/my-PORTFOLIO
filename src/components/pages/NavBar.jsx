import './NavBar.css';
import React from 'react';
import Link from '../Link';
import '../Button.css';

function NavBar({ handleClick, contactRef }) {

  return (
    <nav id="navbar" className="navbar">
      <h4 className='my-name'>Michelle Rodriguez <span>Front-End Dev</span></h4>
      {!contactRef ?  <Link to="/" className="margin btn--small btn--orange"> Contact</Link> :<button onClick={handleClick} className='margin-right btn--small btn--orange'>Contact</button>  }
    </nav>
  );
}

export default NavBar;
import './Footer.css';
import React from 'react';

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <p>Michelle Rodríguez <span>&copy;</span> {year}. All Rights Reserved</p>
      <div className='footer-mention'>
      <p>Designed by <span className='link-luis'> Luis Ramírez</span></p>
      </div>
    </footer>
  );
}

export default Footer;
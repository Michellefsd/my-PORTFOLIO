import './Footer.css';
import Stars from '../Stars';
import React from 'react';

function Footer({ starsId }) {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div>
      <div id='stars' className="inline animation"> 
        <Stars size={1.6} bottom={-9} left={25} />
        <Stars size={1} bottom={-9} left={-45} />
        <Stars size={1.3} bottom={-7} left={-30} />
        <Stars size={1.5} bottom={-7} left={-26} />
        <Stars size={.7} bottom={-7} left={11} />
        <Stars size={1.4} bottom={-6} left={0} />
        <Stars size={1.2} bottom={-4} left={19} />
        <Stars size={2} bottom={-4} left={6} />
        <Stars size={1.3} bottom={0} left={9} />
        <Stars size={1.3} bottom={0} left={-19} />
        <Stars size={1.6} bottom={2} left={9} />
        <Stars size={1} bottom={12} left={-15} />
        <Stars size={1.2} bottom={13} left={25} />
        <Stars size={1.5} bottom={19} left={-70} />
        <Stars size={1.9} bottom={19} left={30} />
        <Stars size={.5} bottom={26} left={-60} />
        <Stars size={1} bottom={26} left={18} />
        <Stars size={2} bottom={26} left={-53} />
        <Stars size={.8} bottom={29} left={-62} />
        <Stars size={1.4} bottom={32} left={19} />
        <Stars size={1.4} bottom={36} left={-65} />
        <Stars size={.8} bottom={36} left={28} />
        <Stars size={1.4} bottom={6} left={-78} />
        <Stars size={1.2} bottom={39} left={-55} />
        <Stars size={1.5} bottom={52} left={34} />
      </div>
      
      <footer>
        <p>Michelle Rodríguez <span>&copy;</span> {year}. All Rights Reserved</p>  
        <div className='footer-mention'>
          <p>Designed by <span className='link-luis'> Luis Ramírez</span></p>
        </div> 
      </footer>
     
  </div>
  );
}

export default Footer;
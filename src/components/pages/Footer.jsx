import './Footer.css';
import Stars from '../Stars';
import React from 'react';

function Footer({ starsId }) {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div>
      <div id='stars' className="inline animation"> 
        <Stars size={.8} bottom={29} left={-42} />
        <Stars size={1.4} bottom={36} left={5} />
        <Stars size={1.2} bottom={13} left={9} />
        <Stars size={1.4} bottom={32} left={100} />
        <Stars size={1.3} bottom={0} left={9} />
        <Stars size={1.5} bottom={52} left={4} />
        <Stars size={1.2} bottom={39} left={15} />
        <Stars size={1.3} bottom={36} left={115} />
        <Stars size={1.3} bottom={0} left={90} />
        <Stars size={1.9} bottom={19} left={100} />
        <Stars size={.8} bottom={36} left={88} />
        <Stars size={1.6} bottom={2} left={49} />
        <Stars size={1} bottom={12} left={85} />
        <Stars size={2} bottom={26} left={120} />
        <Stars size={.5} bottom={26} left={64} />
        <Stars size={1.5} bottom={19} left={59} />
        <Stars size={1} bottom={26} left={70} />
        <Stars size={1} bottom={-9} left={65} />
        <Stars size={2} bottom={-4} left={116} />
        <Stars size={1.6} bottom={-9} left={25} />
        <Stars size={.7} bottom={-7} left={11} />
        <Stars size={1.4} bottom={-6} left={0} />
        <Stars size={1.3} bottom={-7} left={-30} />
        <Stars size={1.5} bottom={-7} left={-26} />
        <Stars size={1.2} bottom={-4} left={19} />
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
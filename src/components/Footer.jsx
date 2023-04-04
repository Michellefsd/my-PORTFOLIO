import React from 'react';

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <p>Michelle Rodríguez <span>&copy;</span> {year}. All Rights Reserved</p>
      <p className='luis'>Designed by</p> <a className='link-luis' target="blank" href="https://www.figma.com/file/Cx3Kp0Ipa8lBAOd1IbZjqz/Michelle-Rodr%C3%ADguez-(Copy)?node-id=9-212&t=L1pV2OnbFyz3le90-0">Luis Ramírez</a>
    </footer>
  );
}

export default Footer;
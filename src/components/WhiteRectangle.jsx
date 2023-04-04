import './Button.css';
import React from 'react';

function WhiteRectangle( projectName, technologies ) {
  return (
    <div className='white-rectangle'>
        <h4>{projectName}</h4>
        <p>{technologies}</p>
        <a className='btn--white btn--small' href="https://simulador-carrito.netlify.app" target="_blank" >View</a>
    </div>
  )
}

export default WhiteRectangle
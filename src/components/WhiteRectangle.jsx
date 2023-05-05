import './WhiteRectangle.css'
import './Button.css';
import React from 'react';

<<<<<<< Updated upstream
function WhiteRectangle( {projectName, technologies} ) {
=======
function WhiteRectangle( { projectName, technologies } ) {
>>>>>>> Stashed changes
  return (
    <div className='white-rectangle'>
      <div>
        <h4>{projectName}</h4>
        <p>{technologies}</p>
      </div>
        <button className='btn--white btn--small' href="https://simulador-carrito.netlify.app" target="_blank" >View</button>
    </div>
  )
}

export default WhiteRectangle
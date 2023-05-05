import './Studies.css';
import React from 'react'

function Studies({where, when, what, imagen}) {
  return (
    <div className='studies__card'>
        <div className='img__div--studiestudie'>
          <img src={imagen} className='studies-img' alt="imagen representativa del estudio en cuestión"/>
        </div>
        <div className='studies__info'>
            <p className='where'>{where}</p>
            <h4 className='what'>{what}</h4>
            <p className='when'>{when}</p>
        </div>
    </div>
  )
}

export default Studies
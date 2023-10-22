import './Hero.css';
import React from 'react'

function Hero({ handleClick }) {
  return (
    <div className='container'>
      <div className='cloud cl1'></div>
      <div className='cloud cl2'></div>
      <div className='cloud cl3'></div>
      <main className='hero-main over-cloud'>
          <h3 className='greetings'>Hello world!</h3>
          <h3 className='greetings mb-16'>I'm <span>Michelle Rodríguez</span> I'm a Full Stack Dev</h3>
          <button onClick={handleClick} className='btn--white btn--big'>View Profile</button>
      </main>
    </div>
  )
}

export default Hero
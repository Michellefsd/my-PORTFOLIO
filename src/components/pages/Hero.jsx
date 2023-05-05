import './Hero.css';
import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <main className='hero-main'>
          <h3 className='greetings'>Hello world!</h3>
          <h3 className='greetings mb-16'>I'm <span>Michelle Rodríguez</span> I'm a Front End Dev</h3>
          <button className='btn--white btn--big'>View Profile</button>
      </main>
    </div>
  )
}

export default Hero
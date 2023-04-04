import './NavBar.css'
import React from 'react'
import './Button.css'

function NavBar() {
  return (
    <nav className="navbar">
        <h4>Michelle Rodriguez</h4>
        <h5>Front-End Dev</h5>
        <button className='btn--small btn--orange'>Contact</button>
    </nav>

  )
}

export default NavBar
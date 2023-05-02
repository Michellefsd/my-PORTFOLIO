import './NavBar.css'
import React from 'react'
import './Button.css'

function NavBar() {
  return (
    <nav className="navbar">
        <h4 className='my-name'>Michelle Rodriguez <span>Front-End Dev</span></h4>
        <button className='btn--small btn--orange'>Contact</button>
    </nav>

  )
}

export default NavBar
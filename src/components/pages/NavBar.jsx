import './NavBar.css';
import '../Button.css';
import Link from '../Link';
import { IconContext } from 'react-icons';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

function NavBar({ handleClick, handleClickFromProject }) {
  
  return (
    <nav id="navbar" className="navbar">
      <h4 className='my-name'>Michelle Rodriguez <span>Front-End Dev</span></h4>
      <div className='margin'>
          <IconContext.Provider value={{ size:"32px" }}>  
            <a className='link-profile' href="https://github.com/Michellefsd" target="blank" rel="noopener noreferrer"><AiFillGithub /></a>
            <a className='link-profile' href="https://www.linkedin.com/in/michelle-rodr%C3%ADguez-326972239/" target="blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a className='link-profile' href="mailto:promichfsd@gmail.com?subject=Hey Michelle, I visited your WebSite&body=hello" title="Mail" rel="noopener noreferrer" target="blank"><IoMdMail /></a>
          </IconContext.Provider>
          {handleClickFromProject? <Link to="/" className="btn--small btn--orange" onClick={handleClickFromProject}>Contact</Link>:<button onClick={handleClick} className="btn--small btn--orange">Contact</button>}  
      </div> 
    </nav>
  );
}

export default NavBar;
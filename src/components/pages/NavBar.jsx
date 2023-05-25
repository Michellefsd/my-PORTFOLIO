import './NavBar.css';
import '../Button.css';
import Link from '../Link';

function NavBar({ handleClick, handleClickFromProject }) {
  
  return (
    <nav id="navbar" className="navbar">
      <h4 className='my-name'>Michelle Rodriguez <span>Front-End Dev</span></h4>
    {handleClickFromProject? <Link to="/" className="margin btn--small btn--orange" onClick={handleClickFromProject}>Contact</Link>:<button onClick={handleClick} className="margin btn--small btn--orange">Contact</button>}  
    </nav>
  );
}

export default NavBar;
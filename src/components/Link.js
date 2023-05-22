import './Button.css';
import { useContext } from 'react';
import NavigationContext from '../context/Navigation';

function Link({ to, children, className, onClick}) {
    const { navigate } = useContext(NavigationContext)
    const handleClick = (e) => {
        e.preventDefault();
        navigate(to);
    }
  return (
    <button className={className} onClick={handleClick}>{children}</button>
  );
}

export default Link;
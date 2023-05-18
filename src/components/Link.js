import './Button.css';
import { useContext } from 'react';
import NavigationContext from '../context/Navigation';

function Link({ to, children}) {
    const { navigate } = useContext(NavigationContext)
    const handleClick = (e) => {
        e.preventDefault();
        navigate(to);
    }
  return (
    <button className='btn--big btn--white'>{children}</button>
  );
}

export default Link;
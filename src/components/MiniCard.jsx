import './MiniCard.css';
import { IconContext } from 'react-icons';


function MiniCard({ children, icon }) {
  return (
    <div className='minicard'>
      <div className="centered">
      <IconContext.Provider value={{ size:"42px", color: "var(--primary_color--80)" }}>  
        {icon} 
        </IconContext.Provider>  
      </div>
        <h4 className='skill'>{children}</h4>
    </div>
  );
}

export default MiniCard;

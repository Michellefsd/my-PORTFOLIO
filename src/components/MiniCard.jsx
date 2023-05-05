import './MiniCard.css';
<<<<<<< Updated upstream

function MiniCard({skill, children}) {
  return (
    <div className='minicard'>
        <div className='centered'>
          {children}
        </div>
        <h4 className='skill'>{skill}</h4>
=======
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
>>>>>>> Stashed changes
    </div>
  );
}

export default MiniCard;

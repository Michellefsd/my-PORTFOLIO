import './MiniCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MiniCard({skill, icon}) {
  return (
    <div className='minicard'>
        <div className='centered'>
          <FontAwesomeIcon icon={icon} size="2xl" style={{color: "var(--primary_color--80)"}} /> 
        </div>
        <h4 className='skill'>{skill}</h4>
    </div>
  );
}

export default MiniCard;
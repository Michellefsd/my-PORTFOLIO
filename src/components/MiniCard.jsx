import './MiniCard.css';

function MiniCard({skill, children}) {
  return (
    <div className='minicard'>
        <div className='centered'>
          {children}
        </div>
        <h4 className='skill'>{skill}</h4>
    </div>
  );
}

export default MiniCard;
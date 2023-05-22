import './WhiteRectangle.css'
import Link from './Link';


function WhiteRectangle( { to, projectName, technologies } ) {
  return (
    <div className='white-rectangle'>
      <div>
        <h4>{projectName}</h4>
        <p>{technologies}</p>
      </div>
      <Link to={to}>See Project</Link>
    </div>
  );
};

export default WhiteRectangle;
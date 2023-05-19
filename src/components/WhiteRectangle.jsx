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
        {/* <button className='btn--white btn--small' href="https://simulador-carrito.netlify.app" target="_blank" >View</button> */}
    </div>
  );
};

export default WhiteRectangle;
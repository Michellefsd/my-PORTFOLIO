import './Aeroplane.css';
import imgAeroplane from '../img/avion1.png';

function Aeroplane() {
  return (
    <div className='aeroplane-div' > 
        <img className='aeroplane' src={imgAeroplane} alt="aeroplane" />
    </div>
  );
}

export default Aeroplane;
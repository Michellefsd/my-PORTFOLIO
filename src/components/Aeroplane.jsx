import './Aeroplane.css';
import imgAeroplane from '../img/avion1.png';
import imgMiniAeroplane from '../img/avion.png';

function Aeroplane() {
  return (
    <div>
      <div className='mini-aeroplane-div'>
        <img className='mini-aeroplane' src={imgMiniAeroplane} alt="aeroplane" />
      </div>
      <div className='aeroplane-div'> 
          <img className='aeroplane' src={imgAeroplane} alt="aeroplane" />
      </div>
    </div>
  );
}

export default Aeroplane;
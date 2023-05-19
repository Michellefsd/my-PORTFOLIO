import img from '../img/edificio-1.png';
import Aeroplane from './Aeroplane';

function AnimationSky() {
  return (
    <div>
        <div className='flex'>
            <img 
                src={img}
                alt='edificios dados vuelta, imagen decorativa marco superior'
            />
            <img 
                className='buildings'
                src={img}
                alt='edificios dados vuelta, imagen decorativa marco superior'
            />
        </div>
        <div className='avion'>
            <Aeroplane />
        </div>
    </div>
  );
};

export default AnimationSky;
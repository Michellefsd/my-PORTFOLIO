import img from '../img/edificio-1.png';

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
    </div>
  );
};

export default AnimationSky;
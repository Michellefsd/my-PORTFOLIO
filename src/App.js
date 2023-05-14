import './App.css';
import { useRef } from 'react';
import img from './img/edificio-1.png'
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Hero from './components/pages/Hero';
import NavBar from './components/pages/NavBar';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Aeroplane from './components/Aeroplane';

function App() { 
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);
  
  const handleClickToContact = () => {
    contactRef.current.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickToProfile = () => {
    aboutMeRef.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <NavBar handleClick={handleClickToContact}/>
          <main className='bk-main'>
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
            <Hero handleClick={handleClickToProfile}/>
            <div className='div-skills'>
              <div  ref={aboutMeRef}>
                <AboutMe />
              </div>
              <Skills />
            </div>
            <Projects />
            <div ref={contactRef}>
              <Contact />
            </div>
            <Footer />
          </main>
    </div>
  );
}
export default App;

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



function App() {
  const aboutMeRef = useRef();
  const contactRef = useRef();
  const handleClickToContact = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth'});
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
            <Hero handleClick={handleClickToProfile}/>
            <div className='div-skills'>
              <AboutMe ref={aboutMeRef}/>
              <Skills />
            </div>
            <Projects />
            <Contact ref={contactRef} />
            <Footer />
          </main>
    </div>
  );
}
export default App;

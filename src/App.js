import './App.css';
import '../src/components/underlined.css';
import { useRef } from 'react';
import img from './img/edificio-1.png';
import subtitleLineHook from './hooks/subtitleLineHook';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Hero from './components/pages/Hero';
import NavBar from './components/pages/NavBar';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Aeroplane from './components/Aeroplane';
import Route from './components/Route';
import ProjectPage from './components/pages/ProjectPage';

function App() { 
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);
  
  const handleClickToContact = () => {
    contactRef.current.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickToProfile = () => {
    aboutMeRef.current.scrollIntoView({behavior: 'smooth'});
  };

  const handleUnderlineAnimation = () => {
    subtitleLineHook()
  }

  return (
    <div>
        <Route path="/project1">
          <ProjectPage title={"tarara"} img={img} resume={"bla bla bla"} />
        </Route>
        <Route path="/project2">
          <ProjectPage title={"tarara"} img={img} resume={"bla bla bla"} />
        </Route>
        <Route path="/project3">
          <ProjectPage title={"tarara"} img={img} resume={"bla bla bla"} />
        </Route>
        <Route path="/">  
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
              <div className='stretch' ref={aboutMeRef}>
                <AboutMe onMouseOver={handleUnderlineAnimation} />
              </div>
              <div className='stretch'>
                <Skills onMouseOver={handleUnderlineAnimation}/>
              </div>
            </div>

            <Projects onMouseOver={handleUnderlineAnimation}/>
            <div ref={contactRef}>
              <Contact onMouseOver={handleUnderlineAnimation}/>
            </div>
            <Footer />
          </main>
        </Route>
    </div>
  );
}
export default App;

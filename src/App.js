import './App.css';
import { useRef } from 'react';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Hero from './components/pages/Hero';
import NavBar from './components/pages/NavBar';
import Projects from './components/pages/Projects';
import Route from './components/Route';
import ProjectPage from './components/pages/ProjectPage';
import Skills from './components/pages/Skills';
import AnimationSky from './components/AnimationSky';
import Aeroplane from './components/Aeroplane';
import img from './img/cv.jpg';
import img3 from './img/tocatayfuga.webp';
import img2 from './img/rickmorty.webp';
import img1 from './img/1project.webp';
// import subtitleLineHook from './hooks/subtitleLineHook';

function App() { 
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);
  
  const handleClickToContact = () => {
    contactRef.current.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickToProfile = () => {
    aboutMeRef.current.scrollIntoView({behavior: 'smooth'});
  };

  // const handleUnderlineAnimation = () => {
  //   subtitleLineHook()
  // }

  return (
    <div>
      <NavBar handleClick={handleClickToContact}/>
      <main className='bk-main'>
        <AnimationSky />
        <Route path="/project-1">
          <ProjectPage title={"Tocata & Fuga"} collaborators={[{name: "Michelle Rodríguez", as: "Front-end Development", image: {img}}]}img={img1} href={"https://tocata-y-fuga.netlify.app/"} resume={"Simple real project with the intention of spread, promulgate, dates of shows of the Humor and Music humor Company: Tocata & Fuga"} />
        </Route>
        <Route path="/project-2">
          <ProjectPage title={"tarara"} img={img2} resume={"bla bla bla"} />
        </Route>
        <Route path="/project-3">
          <ProjectPage title={"tarara"} img={img3} resume={"bla bla bla"} />
        </Route>
        <Route path="/"> 
          <div className='avion'>
              <Aeroplane />
          </div> 
          <Hero handleClick={handleClickToProfile}/>
          <div className='div-skills'>
            <div className='stretch' ref={aboutMeRef}>
              <AboutMe  />
            </div>
            <div className='stretch'>
              <Skills />
            </div>
          </div>
          <Projects />
          <div ref={contactRef}>
            <Contact />
          </div>
        </Route>
        <Footer />
      </main>
    </div>
  );
}
export default App;

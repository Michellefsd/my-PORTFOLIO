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
        <Route path="/project-1">
          <ProjectPage 
            title={"E-Shop cart"} 
            img={img1} 
            resume={"Simple real project with the intention of spread, promulgate, dates of shows of the Humor and Music humor Company: Tocata & Fuga"} 
            href={"https://tocata-y-fuga.netlify.app/"} 
            collaborators={[{name: "Michelle Rodríguez", as: "Front-end Dev.", img: {img}}]}
            list={["React", "CSS", "Javascript", "Node", "npm", "Github", "Figma", "Clean Code", "Research", "Responsive Design", "Collaborative Creation"]}
          />
        </Route>
        <Route path="/project-2">
          <ProjectPage 
            title={"Rick & Morty"} 
            img={img2} 
            resume={"bla bla bla"} 
            href={"https://tocata-y-fuga.netlify.app/"} 
            collaborators={[{name: "Michelle Rodríguez", as: "Front-end Dev.", image: {img}}]} 
            list={["React", "CSS", "Github", "Figma", "Node", "Javascript", "Responsive Design", "Validation Form", "Investigation", "Clean Code"]}
          />
        </Route>
        <Route path="/project-3">
          <ProjectPage 
            title={"Tocata & Fuga"} 
            img={img3} 
            resume={"Simple real project with the intention of spread, promulgate, dates of shows of the Humor and Music humor Company: Tocata & Fuga"} 
            href={"https://tocata-y-fuga.netlify.app/"} 
            collaborators={[{name: "Michelle Rodríguez", as: "Front-end Dev.", img: {img}}, {name: "Luis Ramírez", as: "Designer", img: {img}}]}
            list={["Html", "CSS", "Github", "Responsive Design"]}
          />
        </Route>
        <Route path="/project-4">
          <ProjectPage 
            title={"Portfolio"} 
            img={img3} 
            resume={"Simple real project with the intention of spread, promulgate, dates of shows of the Humor and Music humor Company: Tocata & Fuga"} 
            href={"https://tocata-y-fuga.netlify.app/"} 
            collaborators={[{name: "Michelle Rodríguez", as: "Front-end Dev.", img: {img}}, {name: "Luis Ramírez", as: "Designer", img: {img}}]}
            list={["React", "CSS", "Javascript", "Node", "npm", "Github", "Figma", "Responsive Design", "Collaborative Creation", "Clean Code", "Research"]}
          />
        </Route>
        <Route path="/"> 
          <AnimationSky />
          <div className='avion'>
              <Aeroplane />
          </div> 
          <Hero handleClick={handleClickToProfile}/>
          <div className='div-skills'>
            <div ref={aboutMeRef}>
              <AboutMe  />
            </div>
            <div>
              <Skills />
            </div>
          </div>
          <Projects />
          <div  ref={contactRef}>
            <Contact />
          </div>
        </Route>
        <Footer />
      </main>
    </div>
  );
}
export default App;


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
import img5 from './img/luis.png';
import img4 from './img/portfolio.webp';
import img3 from './img/tocatayfuga.webp';
import img2 from './img/rickmorty.webp';
import img1 from './img/1project.webp';

function App() {

  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);
  
  const handleClickToContact = () => {
    contactRef.current.scrollIntoView({behavior: 'smooth'}) 
  };
 
  const handleClickToProfile = () => {
    aboutMeRef.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
        <Route path="/project-1">
          <ProjectPage 
            handleClickToContact={handleClickToContact}
            title={"E-Shop cart"} 
            img={img1} 
            imgyo={img}
            resume={"Simulating the functionality of an e-commerce shopping cart, this page renders courses dynamically. Users can organize the course information by word, teacher, or category. When a new category is added, it automatically appears in the category search input. Selected courses are added to the cart. This shows the chosen courses, quantity, and total amount. Users can remove courses individually, decrement quantities or reset cart. If user goes away, localstorage will keep your cart for a while. The project was built from scratch using almost pure JS, Vue was used to render the courses. The HTML and CSS templates were customized to improve the style and alignment of the project."} 
            href={"https://simulador-carrito.netlify.app/"} 
            collaborators={[{name: "Michelle Rodríguez", as: "Full-Stack Dev.",  img: img}]}
            list={["CSS", "JavaScript", "Vue", "npm", "Github", "Clean Code", "Responsive Design", "Classes"]}
          />
        </Route>
        <Route path="/project-2">
          <ProjectPage 
            title={"Rick & Morty"} 
            img={img2} 
            resume={"This is my very first project in React. Here I practice an API request, and get some basis of the library"} 
            href={"https://rick-y-morty-characters.netlify.app/"} 
            collaborators={[{name: "Michelle Rodríguez", as: "Front-end Dev.", img: img}]} 
            list={["React", "CSS", "Github", "Figma", "Node", "JavaScript", "Responsive Design", "Validation Form", "Investigation", "Clean Code"]}
          />
        </Route>
        <Route path="/project-3">
          <ProjectPage 
            title={"Tocata & Fuga"} 
            img={img3}
            resume={"Simple real project with the intention of spread, promulgate, dates of shows of the Humor and Music Company: Tocata & Fuga. This project was builded only with html and Css, just to see the power of simplicity."} 
            href={"https://tocata-y-fuga.netlify.app/"} 
            collaborators={[{name: "Michelle Rodríguez", as: "Front-end Dev.", img: img}]}
            list={["Html", "SCSS", "Gulp", "Github", "Responsive Design"]}
          />
        </Route>
        <Route path="/project-4">
          <ProjectPage 
            title={"Portfolio"} 
            img={img4} 
            resume={"This collaborative project was developed in partnership with Luis Ramirez, a talented UX/UI Designer. The project incorporates animations, form validation, and a project resume section. One of the highlights of this project was the possibility to work with Luis Ramirez's design requirements. It allowed me to gain experience in working with Figma and challenged me to adhere to his design concepts. This collaboration served as valuable practice in collaborating with a designer and understanding the importance of maintaining a cohesive style."} 
            href={"https://tocata-y-fuga.netlify.app/"} 
            collaborators={[{name: "Michelle Rodríguez", as: "Front-end Dev.", img: img}, {name: "Luis Ramírez", as: "Designer", img: img5}]}
            list={["React", "CSS", "JavaScript", "Node", "npm", "Github", "Figma", "Responsive Design", "Collaborative Creation", "Clean Code", "Research"]}
          />
        </Route>
        <Route path="/"> 
          <NavBar handleClick={handleClickToContact} />
          <main className='bk-main'>
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
            <div ref={contactRef}>
              <Contact />
            </div>
            <Footer />
          </main>
      </Route>
    </div>
  );
}
export default App;


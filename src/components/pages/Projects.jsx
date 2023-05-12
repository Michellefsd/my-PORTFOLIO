import './Projects.css';
import { useState } from 'react';
import img1 from '../../img/1project.webp';
import img2 from '../../img/rickmorty.webp';
import img3 from '../../img/tocatayfuga.webp';
import WhiteRectangle from '../WhiteRectangle';
import ProjectDetail from '../ProjectDetail';

function Projects() {
  const [showDetailProject, setShowDetailProject] = useState(0);
 
  const showDetail = (number) => {
    setShowDetailProject(number)
  }
  const hideDetails = () => {
    setShowDetailProject(0)

  }
  return (
    <div className='section--projects'>
      <section className='section--projects--green'>
        <h2 className='section__title--white'><span className='underlined'></span>Projects</h2>
        <div onMouseLeave={hideDetails} className='projects--grid'>
          <div className='project__div'>
            {(showDetailProject === 1) && <ProjectDetail principal={'Project that simulates a shop-cart builded with pure JS.'} content={'All the functionality was builded by me and the template was reformulated to improve the design and work better with the needs.'} href={"https://simulador-carrito.netlify.app"} />}    
            <div onMouseOver={() => showDetail(1)} className='img-container'>
              <img src={img1} alt="Proyecto simulador de compras online" />
            </div>
            <WhiteRectangle projectName={"Carrito de Compras"} technologies={"JavaScript, CSS, HTML"} />
          </div>
          <div className='project__div'>
            {(showDetailProject === 2) && <ProjectDetail principal={'My first project with React'} content={'Getting Practice with Apis and at same time my first aproach to React library'} href={'https://rick-y-morty-characters.netlify.app/'} />}    
            <div onMouseOver={() => showDetail(2)} className='img-container'>
              <img src={img2} alt="Rick and Morty page" />
            </div>
            <WhiteRectangle projectName={"Rick y Morty"} technologies={"React"} />
          </div>
          <div className='project__div'>
            {(showDetailProject === 3) && <ProjectDetail principal={'My very first project just with html and css'} content={'This is a real Project, it was builded to spread schedule of Shows of 2022 of the Music and humor compoany: Tocata & Fuga'} href={'https://tocata-y-fuga.netlify.app/'} />}    
            <div onMouseOver={() => showDetail(3)} className='img-container'>
              <img src={img3} alt="Tocata and Fuga: Music and Humor Company" />
            </div>
            <WhiteRectangle projectName={"Tocata & Fuga"} technologies={"html and css"} />
          </div>
          <div className='project__div'></div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
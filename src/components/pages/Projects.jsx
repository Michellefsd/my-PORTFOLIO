import './Projects.css';
import { useState } from 'react';
import img1 from '../../img/1project.webp';
import WhiteRectangle from '../WhiteRectangle';
import ProjectDetail from '../ProjectDetail';

function Projects() {
  const [showDetailProject, setShowDetailProject] = useState(false)
  const showDetails = () => {
    setShowDetailProject(true)
  }
  const hideDetails = () => {
    setShowDetailProject(false)
  }
  return (
    <div className='section--projects'>
      <section className='section--projects--green'>
        <h2 className='section__title--white'><span className='underlined'></span>Projects</h2>
        <div onMouseLeave={hideDetails} className='projects--grid'>
          <div className='project__div'>
            {showDetailProject && <ProjectDetail content={'Project that simulates a shop-cart builded with pure JS'} href={"https://simulador-carrito.netlify.app"} />}    
            <div onMouseOver={showDetails} className='img-container'>
              <img src={img1} alt="Proyecto simulador de compras online" />
            </div>
            <WhiteRectangle projectName={"Carrito de Compras"} technologies={"JavaScript, CSS, HTML"} />
          </div>
          <div className='project__div'>
           
          </div>
          <div className='project__div'></div>
          <div className='project__div'></div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
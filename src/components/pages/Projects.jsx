import './Projects.css';
import '../underlined.css';
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
            {(showDetailProject === 1) && <ProjectDetail principal={"Carrito de Compras"} content={"JavaScript, CSS, HTML"} />}    
            <div onMouseOver={() => showDetail(1)} className='img-container'>
              <img className="img-fill-container" src={img1} alt="Proyecto simulador de compras online" />
            </div>
            <WhiteRectangle projectName={"Carrito de Compras"} technologies={"JavaScript, CSS, HTML"} />
          </div>
          <div className='project__div'>
            {(showDetailProject === 2) && <ProjectDetail principal={"Rick y Morty"} content={"React"} />}    
            <div onMouseOver={() => showDetail(2)} className='img-container'>
              <img className="img-fill-container" src={img2} alt="Rick and Morty page" />
            </div>
            <WhiteRectangle projectName={"Rick y Morty"} technologies={"React"} />
          </div>
          <div className='project__div'>
            {(showDetailProject === 3) && <ProjectDetail principal={"Tocata & Fuga"} content={"HTML, CSS"} />}    
            <div onMouseOver={() => showDetail(3)} className='img-container'>
              <img className="img-fill-container" src={img3} alt="Tocata and Fuga: Music and Humor Company" />
            </div>
            <WhiteRectangle projectName={"Tocata & Fuga"} technologies={"HTML, CSS"} />
          </div>
          <div className='project__div'></div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
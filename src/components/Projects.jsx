import './Projects.css';
import React from 'react';
import img1 from '../img/1project.webp';
import WhiteRectangle from './WhiteRectangle';

function Projects() {
  return (
    <div className='section--projects'>
      <section className='section--projects--greengreen'>
        <h2 className='section__title--whitehite'><span className='underlined'></span>Projects</h2>
        <div className='projects--grid'>
          <div className='project__div'>
            <div className='img-container'>
              <img src={img1} alt="Proyecto simulador de compras online" />
            </div>
            <WhiteRectangle projectName={"Carrito de Compras"} technologies={"JavaScript, CSS, HTML"} />
          </div>
          <div className='project__div'></div>
          <div className='project__div'></div>
          <div className='project__div'></div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
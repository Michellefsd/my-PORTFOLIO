import './ProjectPage.css';
import '../Button.css';
import Team from '../Team';
import Technologies from '../Technologies';
import Link from '../Link';
import Footer from './Footer';
import NavBar from './NavBar';
import { useRef } from 'react';

function ProjectPage({ title, video, img, resume, href, collaborators, list, handleClickToContact }) {
    
  const cardRef = useRef(null);
  const handleClickToNavbar = () => {
    cardRef.current.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickFromProject = () => {
    setTimeout(() => {
    // handleClickToContact;
    console.log("almost there");
    }, 500);
  }
  return ( 
    <div ref={cardRef}>
      <NavBar handleClickFromProject={handleClickFromProject} />
        <main className='bk-main'>
        <div className='cloud cl1'></div>
        <div className='cloud cl2'></div>
        <div className='cloud cl3'></div>
        <div onLoad={handleClickToNavbar}  id="card" className="project-card">
          <Link to="/" className="btn--back btn--small btn--orange">Back</Link>
          <h2 className='section--title'><span className='underlined'></span>{title}</h2>
          <div>
            {video? <video src={video} alt={title} width="608" controls autoplay loop muted></video> : <img src={img} alt={title} /> }
          </div>

          <p className='resume'>{resume}</p>
          <a target="blank" href={href} className="btn--big btn--white">Visit The Site</a>
          <div className='extras'>
            <div>
              <h3>Team</h3>
              <Team collaborators={collaborators} />
            </div>
            <div>
              <h3>Technologies</h3>
              <Technologies list={list} />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div> 
  ); 
}

export default ProjectPage;
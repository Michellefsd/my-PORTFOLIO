import './ProjectPage.css';
import '../Button.css';
import Team from '../Team';
import Technologies from '../Technologies';

function ProjectPage({ title, img, resume, href, collaborators, list }) {
  return (
    <div className="project-card">
      <button className="btn--back btn--small btn--orange">Back</button>
      <h2 className='section--title'><span className='underlined'></span>{title}</h2>
      <div>
        <img src={img} alt={title} />
      </div>
      <p>{resume}</p>
      <a href={href} className="btn--big btn--white">Visit The Site</a>
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
  )
}

export default ProjectPage
import './ProjectPage.css';
import '../Button.css';
import Team from '../Team';
import Technologies from '../Technologies';

function ProjectPage({ title, img, resume, href, collaborators, list }) {
  return (
    <div className="project-card">
      <button className="btn--small btn--orange">Back</button>
      <h2 className='padd section--title'><span className='underlined'></span>{title}</h2>
      <div className='padd'>
        <img src={img} alt={title} />
      </div>
      <p className='padd'>{resume}</p>
      <a href={href} className="padd btn--big btn--white">Visit The Site</a>
      <h3 className='padd'>Team</h3>
      <Team collaborators={collaborators} />
      <h3>Technologies</h3>
      <Technologies list={list} />
    </div>
  )
}

export default ProjectPage
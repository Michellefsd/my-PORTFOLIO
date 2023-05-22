import './ProjectDetail.css';
import './Button.css';
import Link from './Link';


function ProjectDetail({ to, content, principal }) {
  return (
    <div>
      <div className="project-detail"></div>
        <div className='content'>
            <h4>{principal}</h4>
            <p>{content}</p>
            <Link className='btn--big btn--white' to={to}>See Project</Link>
        </div>
    </div>
    
  );
}

export default ProjectDetail;
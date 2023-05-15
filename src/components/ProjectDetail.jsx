import './ProjectDetail.css';
import './Button.css';

function ProjectDetail({ content, href, principal }) {
  return (
    <div>
      <div className="project-detail"></div>
        <div className='content'>
            <p>{principal}</p>
            <p>{content}</p>
            <a  className='btn--big btn--orange' href={href}>See Project</a>
        </div>
    </div>
    
  );
}

export default ProjectDetail;
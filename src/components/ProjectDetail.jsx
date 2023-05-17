import './ProjectDetail.css';
import './Button.css';

function ProjectDetail({ content, principal }) {
  return (
    <div>
      <div className="project-detail"></div>
        <div className='content'>
            <h4>{principal}</h4>
            <p>{content}</p>
            <button className='btn--big btn--white'>See Project</button>
        </div>
    </div>
    
  );
}

export default ProjectDetail;
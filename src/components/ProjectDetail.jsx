import './ProjectDetail.css';

function ProjectDetail({ content, href, principal }) {
  return (
    <div>
      <div className="project-detail"></div>
        <div className='content'>
            <p>{principal}</p>
            <p>{content}</p>
            <a href={href}>See Project</a>
        </div>
    </div>
    
  );
}

export default ProjectDetail;
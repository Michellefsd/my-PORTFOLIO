import './ProjectDetail.css';

function ProjectDetail({ content, href }) {
  return (
    <div className="project-detail">
        <div className='content'>
            <p>{content}</p>
            <a href={href}>See Project</a>
        </div>
    </div>
  );
}

export default ProjectDetail;
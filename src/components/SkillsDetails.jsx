import './ProjectDetail.css';
function SkillsDetails({ principal, content }) {
  return (
    <div>
          <div className="project-detail"></div>
        <div className='content'>
            <p>{principal}</p>
            <p>{content}</p>
        </div>
    </div>
  );
}

export default SkillsDetails;
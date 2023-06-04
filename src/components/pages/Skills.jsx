import './Skills.css'
import { useState } from 'react';
import MiniCard from '../MiniCard';
import SkillsDetail from '../SkillsDetail';
import { FaGlobe, FaBookOpen, FaHandHoldingHeart, FaLightbulb, FaFileCode } from 'react-icons/fa';
import { DiHtml5, DiCss3, DiJsBadge, DiGithubBadge } from 'react-icons/di';
import { BsFillDatabaseFill } from 'react-icons/bs';


function Skills() {
  const [ showDetailsSkills, setShowDetailsSkills ] = useState(0);

  const showDetails = (number) => {
    setShowDetailsSkills(number)
  }
  const hideDetails = () => {
    setShowDetailsSkills(0)
  }

  return (
    <div>
      <section id="skills" className='section'>
        <h2  className='section--title'><span className='underlined'></span>Skills</h2>
        <div>
          <div className='section--skills'>
            <h3>Technologies</h3>
            <div className='section--minicard'>
              <MiniCard icon={<DiHtml5 />}>
                HTML
              </MiniCard>
              <div onMouseOver={() => showDetails(2)} onMouseLeave={hideDetails}>
                {(showDetailsSkills === 2) && <SkillsDetail list={["Sass", "Responsive Design", "Bootstrap", "Tailwind"]} />} 
                <MiniCard icon={<DiCss3 />}>
                  CSS
                </MiniCard>
              </div>
              <MiniCard onMouseOver={() => showDetails(3)} onMouseLeave={hideDetails} icon={<DiJsBadge />}>
              {(showDetailsSkills === 3) && <SkillsDetail list={["React", "Vue", "Jquery", "Node", "Typescript"]} />}
                JavaScript
              </MiniCard>
              <MiniCard onMouseOver={() => showDetails(4)} onMouseLeave={hideDetails} icon={<DiGithubBadge />}>
              {(showDetailsSkills === 4) && <SkillsDetail list={["GitHub"]} />}
                Git
              </MiniCard>
              <MiniCard onMouseOver={() => showDetails(5)} onMouseLeave={hideDetails} icon={<BsFillDatabaseFill />}>
              {(showDetailsSkills === 5) && <SkillsDetail list={["MySQL"]} />}
                Databases
              </MiniCard>
              <MiniCard onMouseOver={() => showDetails(6)} onMouseLeave={hideDetails} icon={<FaFileCode />}>
              {(showDetailsSkills === 6) && <SkillsDetail list={["Php Basics", "Node Basics", "Python Basics"]} />}
                Backend
              </MiniCard>
            </div>
          </div>
          <div className='section--skills'>
            <h3>Soft Skills</h3>
            <div className='section--minicard'>
              <MiniCard onMouseOver={() => showDetails(20)} onMouseLeave={hideDetails} icon={<FaLightbulb />}>
                Proactive
              </MiniCard>
              <MiniCard icon={<FaHandHoldingHeart />}>
                Empathy
              </MiniCard>
              <MiniCard onMouseOver={() => showDetails(22)} onMouseLeave={hideDetails} icon={<FaBookOpen />}>
                Self-Learning
              </MiniCard>
            </div>
          </div>
          <div className='section--skills'>
            <h3>Languages</h3>
            <div className='section--minicard'>
              <MiniCard onMouseOver={() => showDetails(10)} onMouseLeave={hideDetails} icon={<FaGlobe />}>
                English
              </MiniCard>
              <MiniCard onMouseOver={() => showDetails(11)} onMouseLeave={hideDetails} icon={<FaGlobe />}>
                Portuguese
              </MiniCard>
              <MiniCard onMouseOver={() => showDetails(12)} onMouseLeave={hideDetails} icon={<FaGlobe />}>
                Spanish
              </MiniCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
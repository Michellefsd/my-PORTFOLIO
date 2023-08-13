import './Skills.css'
// import { useState } from 'react';
import MiniCard from '../MiniCard';
// import SkillsDetail from '../SkillsDetail';
import { FaGlobe, FaBookOpen, FaHandHoldingHeart, FaLightbulb, FaFileCode } from 'react-icons/fa';
import { DiHtml5, DiCss3, DiJsBadge, DiGithubBadge, DiReact, DiPython } from 'react-icons/di';
import { BsFillDatabaseFill } from 'react-icons/bs';


function Skills() {

  return (
    <div>
      <section id="skills" className='section'>
        <h2  className='section--title'><span className='underlined'></span>Skills</h2>
        <div>
          <div className='section--skills'>
            <h3>Technologies</h3>
            <div className='section--minicard'>
              <MiniCard icon={<><DiHtml5 /><DiCss3 /></>}>
                HTML & CSS
              </MiniCard>
              <MiniCard icon={<DiJsBadge />}>
                JavaScript
              </MiniCard>
              <MiniCard icon={<DiReact />}>
                React
              </MiniCard>
              <MiniCard icon={<DiGithubBadge />}>
                GitHub
              </MiniCard>
              <MiniCard icon={<BsFillDatabaseFill />}>
                SQL
              </MiniCard>
              <MiniCard icon={<DiPython />}>
                Python
              </MiniCard>
            </div>
          </div>
          <div className='section--skills'>
            <h3>Soft Skills</h3>
            <div className='section--minicard'>
              <MiniCard icon={<FaLightbulb />}>
                Proactive
              </MiniCard>
              <MiniCard icon={<FaHandHoldingHeart />}>
                Empathy
              </MiniCard>
              <MiniCard icon={<FaBookOpen />}>
                Self-Learning
              </MiniCard>
            </div>
          </div>
          <div className='section--skills'>
            <h3>Languages</h3>
            <div className='section--minicard'>
              <MiniCard icon={<FaGlobe />}>
                English
              </MiniCard>
              <MiniCard icon={<FaGlobe />}>
                Portuguese
              </MiniCard>
              <MiniCard icon={<FaGlobe />}>
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
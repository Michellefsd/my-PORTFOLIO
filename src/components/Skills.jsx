import './Skills.css'
import { faGlobe, faBookOpen, faHandHoldingHeart, faLightbulb, fa9, fa4, fa3 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import MiniCard from './MiniCard';

function Skills() {
  return (
    <div>
      <section  className='section'>
        <h2  className='section--title'><span className='underlined'></span>Skills</h2>
        <div>
          <div className='section--skills'>
            <h3>Technologies</h3>
            <div className='section--minicard'>
              <MiniCard icon={fa9} skill={"HTML5"} />
              <MiniCard icon={fa9} skill={"CSS"} />
              <MiniCard icon={fa9} skill={"JavaScript"} />
              <MiniCard icon={fa9} skill={"GitHub"} />
              <MiniCard icon={fa4} skill={"MySQL"} />
              <MiniCard icon={fa3} skill={"PHP"} />
            </div>
          </div>
          <div className='section--skills'>
            <h3>Soft Skills</h3>
            <div className='section--minicard'>
              <MiniCard icon={faLightbulb} skill={"Proactive"} />
              <MiniCard icon={faHandHoldingHeart} skill={"Empathy"} />
              <MiniCard icon={faBookOpen} skill={"Autodidact"} />
            </div>
          </div>
          <div className='section--skills'>
            <h3>Languages</h3>
            <div className='section--minicard'>
              <MiniCard icon={faGlobe} skill={"English"} />
              <MiniCard icon={faGlobe} skill={"Portuguese"} />
              <MiniCard icon={faGlobe} skill={"Spanish"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
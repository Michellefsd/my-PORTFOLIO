import './Skills.css'
import { FaGlobe, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaDatabase, FaPhp, FaBookOpen, FaHandHoldingHeart, FaLightbulb } from 'react-icons/fa';
import React from 'react';
import MiniCard from './MiniCard';

function Skills() {
const style = {color: 'var(--primary_color--80)', fontSize: '32px'} 

  return (
    <div>
      <section  className='section'>
        <h2  className='section--title'><span className='underlined'></span>Skills</h2>
        <div>
          <div className='section--skills'>
            <h3>Technologies</h3>
            <div className='section--minicard'>
              <MiniCard skill={"HTML5"}><FaHtml5 style={style} /></MiniCard>
              <MiniCard skill={"CSS"}><FaCss3Alt style={style} /></MiniCard>
              <MiniCard skill={"JavaScript"}><FaJsSquare style={style} /></MiniCard>
              <MiniCard skill={"GitHub"}><FaGithub style={style} /></MiniCard>
              <MiniCard skill={"MySQL"}><FaDatabase style={style} /></MiniCard>
              <MiniCard skill={"PHP"}><FaPhp style={style} /></MiniCard>
            </div>
          </div>
          <div className='section--skills'>
            <h3>Soft Skills</h3>
            <div className='section--minicard'>
              <MiniCard skill={"Proactive"}><FaLightbulb style={style} /></MiniCard>
              <MiniCard skill={"Empathy"}><FaHandHoldingHeart style={style} /></MiniCard>
              <MiniCard skill={"Autodidact"}><FaBookOpen style={style} /></MiniCard>
            </div>
          </div>
          <div className='section--skills'>
            <h3>Languages</h3>
            <div className='section--minicard'>
              <MiniCard skill={"English"}><FaGlobe style={style} /></MiniCard>
              <MiniCard skill={"Portuguese"}><FaGlobe style={style} /></MiniCard>
              <MiniCard skill={"Spanish"}><FaGlobe style={style} /></MiniCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
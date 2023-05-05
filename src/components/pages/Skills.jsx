import './Skills.css'
import React from 'react';
import MiniCard from '../MiniCard';
import { FaGlobe, FaBookOpen, FaHandHoldingHeart, FaLightbulb } from 'react-icons/fa';
import { DiHtml5, DiCss3, DiJsBadge, DiGithubBadge, DiDatabase, DiPhp } from 'react-icons/di';


function Skills() {
  return (
    <div>
      <section  className='section'>
        <h2  className='section--title'><span className='underlined'></span>Skills</h2>
        <div>
          <div className='section--skills'>
            <h3>Technologies</h3>
            <div className='section--minicard'>
              <MiniCard icon={<DiHtml5 />}>
                HTML
              </MiniCard>
              <MiniCard icon={<DiCss3 />}>
                CSS
              </MiniCard>
              <MiniCard icon={<DiJsBadge />}>
                JavaScript
              </MiniCard>
              <MiniCard icon={<DiGithubBadge />}>
                Git
              </MiniCard>
              <MiniCard icon={<DiDatabase />}>
                Sql
              </MiniCard>
              <MiniCard icon={<DiPhp />}>
                Php
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
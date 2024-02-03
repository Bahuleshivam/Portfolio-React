import React from 'react';
import skillImg from '../Skills/skills.png'
import '../Skills/skills.css'

const Skills = () => {
  return (
    <div className='skill-component'>
      <div className="skill-image-div">
        <img className='skill-img' src={skillImg} alt="" />
      </div>
      <div className="skills-box">
        <p className='skills-p'>Frontend developers, equipped with a blend of design sensibility and technical expertise, create a positive synergy, shaping transformative and user-friendly experiences & Here is my <span className='skill-color'>Skill Set</span> </p>
        <div className="skill-set">
          <ul className='skills-ul'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>BootStrap</li>
            <li>Redux</li>
            <li>Node JS</li>
            <li>Tailwind</li>
            <li>Material UI</li>
            <li>Express JS</li>
            <li>MongoDB</li>
            <li>FireBase</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Version Control</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;

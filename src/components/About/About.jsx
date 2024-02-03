import React from 'react';
import './about.css'
import image1 from '../About/shape.png'
import { Link } from 'react-router-dom';
import resume from '../About/resume/resume.pdf'

const About = ({handleLinkClick}) => {
    return (
        <>
        <div className='homepage-container'>
            <img src={image1} alt="" className='animation-img' />
            <div className="detail">
                <span className='detail-heading'>Front<span className='arr'>&#8722;</span>End</span>
                <div className='detail-heading'> <span className='arr1'>&#60;</span>  Developer / <span className='arr2'>&#62;</span> </div>
                <p className='detail-p'>Hello, I am <span className='name'>Shivam Bahule</span>, I aspire to kickstart my career in front-end development, 
                with a dedicated focus on improving my skills. My goal is to enhance my productivity and contribute to the design, 
                planning, and development of complex applications. I am passionate about new technologies and constantly seek to expand 
                my knowledge in this field. My strong interest lies in front-end web technologies, which I learn through reading books, studying documentation, 
                and watching YouTube videos. I am proficient in Marathi, Hindi and English.</p>

                <div className="btns">
                    <button className='btn-home bg-btn-resume'> <Link className='btn-link-resume' to={resume} target='_blank'>Resume</Link> </button>
                    <button className="btn-home bg-btn-project"><Link onClick={() => handleLinkClick('projects')} className='btn-link' to='/Projects'>Projects</Link></button>
                    
                </div>

                <div className="homepage-contacts">
                    <ul className='contact-ul'>
                        <li>
                           <Link className='contact-link' to='https://github.com/Bahuleshivam' target='_blank'><i class="fa-brands fa-github"></i></Link> 
                        </li>
                        <li>
                           <Link className='contact-link' to='https://www.linkedin.com/in/shivam-bahule-62b595210/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></Link> 
                        </li>
                        <li>
                           <Link className='contact-link' to='https://mail.google.com/mail/u/0/#inbox' target='_blank'><i class="fa-regular fa-envelope"></i></Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        </>
    );
}

export default About;

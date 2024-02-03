import React from 'react';
import image from '../Projects/img.png'
import '../Projects/project.css'
import wedImg from '../Projects/Images/weather.jpg'
import drumkit from '../Projects/Images/drumKit.jpg'
import Ecommerce from '../Projects/Images/ecommerce.jpg'
import music from '../Projects/Images/music.png'
import snake from '../Projects/Images/snake.jpg'
import todo from '../Projects/Images/todo.png'
import expense from '../Projects/Images/expense.png'
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <>
            <div className='project-container'>
                <div className="project-desc">
                    <h1 className='project-h1'>Browse through my newest</h1>
                    <span className='pro-span'>Projects.</span><br />
                    <span>| Frontend Projects |</span>
                </div>
                <div className="project-img">
                    <img className='project-image' src={image} alt="" />
                </div>
            </div>

            <div className="card-section">
                <div className="cards">
                    <div className="item">
                        <img src={Ecommerce} alt="" className='item-img' />
                        <div className="card-desc">
                            <h3>E-commerce Website</h3>
                            <p className='card-desc-p'>Engineered a responsive e-commerce site with React, Firebase, and Redux Toolkit</p>
                        </div>
                        <div className="live-btns">
                            <button className='project-btn'><Link to='https://github.com/Bahuleshivam/e-commerce' target='_blank' className='project-link'>GitHub</Link></button>
                            <button className='project-btn' > <Link to='https://fashionswear.netlify.app/' target='_blank' className='project-link'>Demo</Link></button>
                        </div>
                    </div>

                    <div className="item">
                        <img src={wedImg} alt="" className='item-img' />
                        <div className="card-desc">
                            <h3>Weather App</h3>
                            <p className='card-desc-p'>Crafted a dynamic weather app using HTML, CSS, and JavaScript, seamlessly integrating live data from APIs. </p>
                        </div>
                        <div className="live-btns">
                            <button className='project-btn'><Link to='https://github.com/Bahuleshivam/Weather-app' target='_blank' className='project-link'>GitHub</Link></button>
                            <button className='project-btn' > <Link to='https://weathersnapp.netlify.app/' target='_blank' className='project-link'>Demo</Link></button>
                        
                        </div>
                    </div>

                    <div className="item">
                        <img src={expense} alt="" className='item-img' />
                        <div className="card-desc">
                            <h3>Expense Tracker</h3>
                            <p className='card-desc-p'>Developed a responsive expense tracker website with React, showcasing a sleek interface and insightful income-expense graphs.</p>
                        </div>
                        <div className="live-btns">
                            <button className='project-btn'><Link to='https://github.com/Bahuleshivam/Expense-Tracker' target='_blank' className='project-link'>GitHub</Link></button>
                            <button className='project-btn' > <Link to='https://expenses-trac.netlify.app/' target='_blank' className='project-link'>Demo</Link></button>
                        
                        </div>
                    </div>
                    <div className="item">
                        <img src={music} alt="" className='item-img' />
                        <div className="card-desc">
                            <h3>Spotify Clone</h3>
                            <p className='card-desc-p'>Crafted a dynamic Spotify clone using HTML, CSS, and JavaScript.</p>
                        </div>
                        <div className="live-btns">
                            <button className='project-btn'><Link to='https://github.com/Bahuleshivam/spotify-clone' target='_blank' className='project-link'>GitHub</Link></button>
                            <button className='project-btn' > <Link to='https://bahuleshivam.github.io/spotify-clone/' target='_blank' className='project-link'>Demo</Link></button>
                        
                        </div>
                    </div>
                    <div className="item">
                        <img src={snake} alt="" className='item-img' />
                        <div className="card-desc">
                            <h3>Snake Game</h3>
                            <p className='card-desc-p'>Developed a responsive Snake game using HTML, CSS, and JavaScript. Dive into the classic gaming experience with a modern twist</p>
                        </div>
                        <div className="live-btns">
                            <button className='project-btn'><Link to='https://github.com/Bahuleshivam/Snake-Game' target='_blank' className='project-link'>GitHub</Link></button>
                            <button className='project-btn' > <Link to='https://bahuleshivam.github.io/Snake-Game/' target='_blank' className='project-link'>Demo</Link></button>
                        
                        </div>
                    </div>
                    <div className="item">
                        <img src={todo} alt="" className='item-img' />
                        <div className="card-desc">
                            <h3>Todo List</h3>
                            <p className='card-desc-p'>Crafted a sleek and efficient ToDo list app using HTML, CSS, and JavaScript.</p>
                        </div>
                        <div className="live-btns">
                            <button className='project-btn'><Link to='https://github.com/Bahuleshivam/06_Todo-list' target='_blank' className='project-link'>GitHub</Link></button>
                            <button className='project-btn' > <Link to='https://todooslists.netlify.app/' target='_blank' className='project-link'>Demo</Link></button>
                        
                        </div>
                    </div>
                    <div className="item">
                        <img src={drumkit} alt="" className='item-img' />
                        <div className="card-desc">
                            <h3>DrumKit</h3>
                            <p className='card-desc-p'>Designed an interactive drumkit website using HTML, CSS, and JavaScript. Immerse yourself in a musical experience as each button triggers a unique beat</p>
                        </div>
                        <div className="live-btns">
                            <button className='project-btn'><Link to='https://github.com/Bahuleshivam/Drum-Kit' target='_blank' className='project-link'>GitHub</Link></button>
                            <button className='project-btn' > <Link to='https://drumkitts.netlify.app/' target='_blank' className='project-link'>Demo</Link></button>
                        
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Project;

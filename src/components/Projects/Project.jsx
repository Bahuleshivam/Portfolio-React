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
                            <p className='card-desc-p'>A user can choose a product as per his choice He can filter the products by size as well as
                                by the color he wants.</p>
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
                            <p className='card-desc-p'>. It can also
demonstrate the power of these technologies in building web applications that interact with API </p>
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
                            <p className='card-desc-p'>. It can also
demonstrate the power of these technologies in building web applications that interact with API </p>
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
                            <p className='card-desc-p'>. It can also
demonstrate the power of these technologies in building web applications that interact with API </p>
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
                            <p className='card-desc-p'>. It can also
demonstrate the power of these technologies in building web applications that interact with API </p>
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
                            <p className='card-desc-p'>. It can also
demonstrate the power of these technologies in building web applications that interact with API </p>
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
                            <p className='card-desc-p'>. It can also
demonstrate the power of these technologies in building web applications that interact with API </p>
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

import React from 'react';
import '../Contact/contact.css'
import contactImg from '../Contact/contact.png'
import profileImg from '../Contact/DSC_2732.png'

const Contact = () => {
    return (
        <div className='contact-container'>

            <div className="contact-details">
                <h1 className='contact-heading'>Contact me</h1>
                <p>Fill in the form to start a conversation</p>

                <div className="homepage-contacts">
                    <ul className='contact-ul'>
                        <li><i class="fa-brands fa-github"></i></li>
                        <li><i class="fa-brands fa-linkedin-in"></i></li>
                        <li><i class="fa-regular fa-envelope"></i></li>
                    </ul>
                </div>

                <img src={contactImg} alt="" className='contact-img' />
            </div>

            <div className="contact-form">
                <form className='cont-form' action="https://getform.io/f/ba3f9442-83a8-46e6-9d60-1a1839aeaf34" method="POST" id='form'>
                    <label htmlFor="name">Name</label>
                    <input className='form-input' type="text" placeholder='Name' id="userName" required/>
                    <label htmlFor="email">Email</label>
                    <input className='form-input' type="text" placeholder='***@gmai.com' id="userEmail" required/>
                    <label htmlFor="message">Message</label>
                    <input className='form-input' type="text" placeholder='Hi, there' id='userMessage' required/>
                    <button className='form-btn' id="submitButton" value="Send Email">Connect</button>

                </form>


            </div>
        </div>
    );
}

export default Contact;
